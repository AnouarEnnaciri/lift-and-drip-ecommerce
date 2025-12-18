import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity, removeFromCart } from "../../redux/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  const handleAddToCart = ({
    productId,
    delta,
    quantity,
    selectedWeight,
    color,
  }) => {
    const newQuantity = quantity + delta;
    if (newQuantity < 1) return;

    dispatch(
      updateCartItemQuantity({
        productId,
        quantity: newQuantity,
        selectedWeight,
        color,
        guestId,
      })
    );
  };

  const handleRemoveFromCart = ({
    productId,
    selectedWeight,
    color,
  }) => {
    dispatch(
      removeFromCart({
        productId,
        selectedWeight,
        color,
        guestId,
      })
    );
  };

  return (
    <div>
      {cart?.products?.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Weight: {product.selectedWeight || product.weight || "-"} | Color:{" "}
                {product.color || "-"}
              </p>

              <div className="flex items-center mt-2">
                <button
                  className="border rounded px-2 py-1 text-xl font-medium"
                  onClick={() =>
                    handleAddToCart({
                      productId: product.productId || product._id,
                      delta: -1,
                      quantity: product.quantity,
                      selectedWeight:
                        product.selectedWeight || product.weight,
                      color: product.color,
                    })
                  }
                >
                  -
                </button>

                <span className="mx-4">{product.quantity}</span>

                <button
                  className="border rounded px-2 py-1 text-xl font-medium"
                  onClick={() =>
                    handleAddToCart({
                      productId: product.productId || product._id,
                      delta: 1,
                      quantity: product.quantity,
                      selectedWeight:
                        product.selectedWeight || product.weight,
                      color: product.color,
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p>$ {product.price.toLocaleString()}</p>

            <button
              onClick={() =>
                handleRemoveFromCart({
                  productId: product.productId || product._id,
                  selectedWeight:
                    product.selectedWeight || product.weight,
                  color: product.color,
                })
              }
            >
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
