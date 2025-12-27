const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
  return null;
};

const recalcTotal = (cart) => {
  cart.totalPrice = cart.products.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
};

const findLineItemIndex = (cart, { productId, selectedWeight }) => {
  const sw = selectedWeight || "default";

  return cart.products.findIndex((p) => {
    const sameProduct = p.productId.toString() === productId;
    const pw = p.selectedWeight || "default";
    const sameWeight = pw === sw;
    return sameProduct && sameWeight;
  });
};

router.post("/", async (req, res) => {
  const { productId, quantity, selectedWeight, guestId } = req.body;
  const userId = req.user ? req.user._id : null;
  const normalizedWeight = selectedWeight || "default";

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const qty = Number(quantity) || 1;
    const price = Number(product.price);

    let cart = await getCart(userId, guestId);

    if (cart) {
      const index = findLineItemIndex(cart, {
        productId,
        selectedWeight: normalizedWeight,
      });

      if (index > -1) {
        cart.products[index].quantity += qty;
      } else {
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price,
          selectedWeight: normalizedWeight,
          quantity: qty,
        });
      }

      recalcTotal(cart);
      await cart.save();
      return res.status(200).json(cart);
    } else {
      const newCart = await Cart.create({
        user: userId || undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price,
            selectedWeight: normalizedWeight,
            quantity: qty,
          },
        ],
        totalPrice: price * qty,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/", async (req, res) => {
  const { productId, quantity, selectedWeight, guestId } = req.body;
  const qty = Number(quantity);
  const userId = req.user ? req.user._id : null;
  const normalizedWeight = selectedWeight || "default";

  try {
    let cart = await getCart(userId, guestId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const index = findLineItemIndex(cart, {
      productId,
      selectedWeight: normalizedWeight,
    });
    if (index === -1)
      return res.status(404).json({ message: "Product not found in cart" });

    if (qty > 0) {
      cart.products[index].quantity = qty;
    } else {
      cart.products.splice(index, 1);
    }

    recalcTotal(cart);
    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/", async (req, res) => {
  const { productId, selectedWeight, guestId } = req.body;
  const userId = req.user ? req.user._id : null;
  const normalizedWeight = selectedWeight || "default";

  try {
    let cart = await getCart(userId, guestId);

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const index = findLineItemIndex(cart, {
      productId,
      selectedWeight: normalizedWeight,
    });

    if (index > -1) {
      cart.products.splice(index, 1);

      recalcTotal(cart);
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
});

router.get("/", async (req, res) => {
  const userId = req.user ? req.user._id : null;
  const { guestId } = req.query;

  try {
    const cart = await getCart(userId, guestId);
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;
  try {
    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user._id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({ message: "Guest cart is empty" });
      }
      if (userCart) {
        guestCart.products.forEach((guestItem) => {
          const giw = guestItem.selectedWeight || "default";

          const index = userCart.products.findIndex((item) => {
            const sameProduct =
              item.productId.toString() === guestItem.productId.toString();
            const uiw = item.selectedWeight || "default";
            const sameWeight = uiw === giw;
            return sameProduct && sameWeight;
          });

          if (index > -1) {
            userCart.products[index].quantity += guestItem.quantity;
          } else {
            userCart.products.push({
              ...guestItem.toObject(),
              selectedWeight: giw,
            });
          }
        });

        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        await userCart.save();

        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.error("Error deleting guest cart:", error);
        }
        res.status(200).json(userCart);
      } else {
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;

        guestCart.products = guestCart.products.map((p) => ({
          ...p.toObject(),
          selectedWeight: p.selectedWeight || "default",
        }));

        guestCart.totalPrice = guestCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        await guestCart.save();

        res.status(200).json(guestCart);
      }
    } else {
      if (userCart) {
        return res.status(200).json(userCart);
      }
      res.status(404).json({ message: "Guest cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
