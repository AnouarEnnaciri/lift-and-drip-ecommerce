const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, admin, async (req, res) => {
  try {
    const {
        name,
  description,
  price,
  discountPrice,
  countInStock,
  sku,
  category,
  equipmentType,
  weightRange,
  images,
  isFeatured,
  featuredRank,
  isPublished,

  isNewArrival,
  newArrivalRank,

  isBestSeller,
  bestSellerRank,

  isTopStrength,
  topStrengthRank,

  isTopConditioning,
  topConditioningRank,

  rating,
  numReviews,
  tags,
  metaTitle,
  metaDescription,
  metaKeywords,
  dimensions,
  weight,
  weightUnit,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      equipmentType,
      weightRange,
      images,
      isFeatured,
      isPublished,
      isNewArrival,
      newArrivalRank,
      isBestSeller,
      bestSellerRank,
      isTopStrength,
      topStrengthRank,
      isTopConditioning,
      topConditioningRank,
      featuredRank,
      rating,
      numReviews,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      dimensions,
      weight,
      weightUnit,
      user: req.user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, v.message])
        ),
      });
    }
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "Duplicate key", key: err.keyValue });
    }
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      equipmentType,
      weightRange,
      images,
      isFeatured,
      isPublished,
      isNewArrival,
      newArrivalRank,
      rating,
      numReviews,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      dimensions,
      weight,
      weightUnit,
      isBestSeller,
      isTopStrength,
      isTopConditioning,
      featuredRank,
      bestSellerRank,
      topStrengthRank,
      topConditioningRank,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name ?? product.name;
      product.description = description ?? product.description;
      product.price = price ?? product.price;
      product.discountPrice = discountPrice ?? product.discountPrice;
      product.countInStock = countInStock ?? product.countInStock;
      product.category = category ?? product.category;
      product.equipmentType = equipmentType ?? product.equipmentType;
      product.weightRange = weightRange ?? product.weightRange;
      product.images = images ?? product.images;
      product.tags = tags ?? product.tags;
      product.metaTitle = metaTitle ?? product.metaTitle;
      product.metaDescription = metaDescription ?? product.metaDescription;
      product.metaKeywords = metaKeywords ?? product.metaKeywords;
      product.isFeatured = isFeatured ?? product.isFeatured;
      product.isPublished = isPublished ?? product.isPublished;
      product.isNewArrival = isNewArrival ?? product.isNewArrival;
      product.newArrivalRank = newArrivalRank ?? product.newArrivalRank;
      product.rating = rating ?? product.rating;
      product.numReviews = numReviews ?? product.numReviews;
      product.dimensions = dimensions ?? product.dimensions;
      product.weight = weight ?? product.weight;
      product.weightUnit = weightUnit ?? product.weightUnit;
      product.sku = sku ?? product.sku;

      product.isBestSeller = isBestSeller ?? product.isBestSeller;
      product.isTopStrength = isTopStrength ?? product.isTopStrength;
      product.isTopConditioning = isTopConditioning ?? product.isTopConditioning;

      product.featuredRank = featuredRank ?? product.featuredRank;
      product.bestSellerRank = bestSellerRank ?? product.bestSellerRank;
      product.topStrengthRank = topStrengthRank ?? product.topStrengthRank;
      product.topConditioningRank =
        topConditioningRank ?? product.topConditioningRank;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findById(req.params.id);

    if (product) {
      // Remove the product from DB
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const {
      category,
      equipmentType,
      weight,
      minPrice,
      maxPrice,
      sortBy,
      search,
      isFeatured,
      isPublished,
      limit,
    } = req.query;

    const query = {};

    // CATEGORY
    if (category && category !== "all") {
      query.category = category;
    }

    // EQUIPMENT TYPE (normalize singular/plural)
    if (equipmentType && equipmentType !== "all") {
      const types = equipmentType
        .split(",")
        .map((t) => t.trim())
        .map((t) => {
          if (t.endsWith("s")) return t.slice(0, -1);
          return t;
        });

      query.equipmentType = { $in: types };
    }

    // WEIGHT RANGE (numeric filter)
    if (weight) {
      const [min, max] = weight.split("-").map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        query.weight = { $gte: min, $lte: max };
      }
    }

    // PRICE RANGE
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // FLAGS
    if (isFeatured !== undefined) {
      query.isFeatured = isFeatured === "true";
    }

    if (isPublished !== undefined) {
      query.isPublished = isPublished === "true";
    }

    // SEARCH
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // SORT
    let sort = {};
    if (sortBy === "priceLowToHigh") sort = { price: 1 };
    if (sortBy === "priceHighToLow") sort = { price: -1 };
    if (sortBy === "popularity") sort = { rating: -1 };

    const products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);

    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.patch("/:id/featured", protect, admin, async (req, res) => {
  try {
    const { isFeatured, featuredRank } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.isFeatured = isFeatured ?? product.isFeatured;
    product.featuredRank = featuredRank ?? product.featuredRank;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.patch("/:id/best-seller", protect, admin, async (req, res) => {
  try {
    const { isBestSeller, bestSellerRank } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.isBestSeller = isBestSeller ?? product.isBestSeller;
    product.bestSellerRank = bestSellerRank ?? product.bestSellerRank;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.patch("/:id/top-strength", protect, admin, async (req, res) => {
  try {
    const { isTopStrength, topStrengthRank } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.isTopStrength = isTopStrength ?? product.isTopStrength;
    product.topStrengthRank = topStrengthRank ?? product.topStrengthRank;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.patch("/:id/top-conditioning", protect, admin, async (req, res) => {
  try {
    const { isTopConditioning, topConditioningRank } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.isTopConditioning =
      isTopConditioning ?? product.isTopConditioning;
    product.topConditioningRank =
      topConditioningRank ?? product.topConditioningRank;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/sections", async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 8, 30);

    const featured = await Product.find({ isPublished: true, isFeatured: true })
      .sort({ featuredRank: 1, createdAt: -1 })
      .limit(limit);

    const bestSellers = await Product.find({ isPublished: true, isBestSeller: true })
      .sort({ bestSellerRank: 1, createdAt: -1 })
      .limit(limit);

    const topStrength = await Product.find({ isPublished: true, isTopStrength: true })
      .sort({ topStrengthRank: 1, createdAt: -1 })
      .limit(limit);

    const topConditioning = await Product.find({ isPublished: true, isTopConditioning: true })
      .sort({ topConditioningRank: 1, createdAt: -1 })
      .limit(limit);

    const newArrivals = await Product.find({isPublished: true,isNewArrival: true,})
      .sort({ newArrivalRank: 1, createdAt: -1 })
      .limit(limit);

    res.json({ featured, bestSellers, topStrength, topConditioning,newArrivals });
  } catch (e) {
    console.error(e);
    res.status(500).send("Server Error");
  }
});

router.get("/home/sections", async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 8, 30);

    const featured = await Product.find({ isPublished: true, isFeatured: true })
      .sort({ featuredRank: 1, createdAt: -1 })
      .limit(limit);

    const bestSellers = await Product.find({ isPublished: true, isBestSeller: true })
      .sort({ bestSellerRank: 1, createdAt: -1 })
      .limit(limit);

    const topStrength = await Product.find({ isPublished: true, isTopStrength: true })
      .sort({ topStrengthRank: 1, createdAt: -1 })
      .limit(limit);

    const topConditioning = await Product.find({ isPublished: true, isTopConditioning: true })
      .sort({ topConditioningRank: 1, createdAt: -1 })
      .limit(limit);

    const newArrivals = await Product.find({isPublished: true,isNewArrival: true,})
      .sort({ newArrivalRank: 1, createdAt: -1 })
      .limit(limit);

    res.json({ featured, bestSellers, topStrength, topConditioning,newArrivals });
  } catch (e) {
    console.error(e);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products/similar/:id
// @desc Retrieve similar products based on the current product
// @access Public
router.get("/similar/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const similarProducts = await Product.find({
      _id: { $ne: id },
    }).limit(4);

    res.json(similarProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/new-arrivals", async (req, res) => {
  try {
    const limit = Math.min(Number(req.query.limit) || 8, 30);

    const newArrivals = await Product.find({
      isPublished: true,
      isNewArrival: true,
    })
      .sort({ newArrivalRank: 1, createdAt: -1 })
      .limit(limit);

    res.json(newArrivals);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
