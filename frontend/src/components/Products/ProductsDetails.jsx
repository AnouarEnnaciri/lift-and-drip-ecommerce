import { useState, useEffect } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails, fetchSimilarProducts } from "../../redux/productsSlice";
import { addToCart } from "../../redux/cartSlice";

const ProductsDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );

  const { user, guestId } = useSelector((state) => state.auth);
  const [mainImage, setMainImage] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    const hasOptions =
      selectedProduct?.options?.values &&
      selectedProduct.options.values.length > 0;

    if (hasOptions && !selectedValue) {
      toast.error("Please select a weight before adding to cart.", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        selectedWeight: hasOptions ? selectedValue : null,
        guestId,
      })
    )
      .then(() => {
        toast.success("Product added to cart!", { duration: 1000 });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      {selectedProduct && (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-200 ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="md:w-1/2">
              <div className="mb-4">
                {mainImage && (
                  <img
                    src={mainImage}
                    alt="Main Product"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                )}
              </div>
            </div>

            {/* Mobile Thumbnail */}
            <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
              {selectedProduct.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-200 ${
                    mainImage === image.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h1>

              <p className="text-lg text-gray-600 mb-1 line-through">
                {selectedProduct.originalPrice &&
                  ` ${selectedProduct.originalPrice} DH`}
              </p>

              <p className="text-xl text-gray-900 mb-2">
                {selectedProduct.price} DH
              </p>

              <p className="text-gray-600 mb-4">
                {selectedProduct.description || "High-quality gym product."}
              </p>

              {selectedProduct.options && (
                <div className="mb-4">
                  <p className="text-gray-700">{selectedProduct.options.label}:</p>
                  <div className="flex gap-2 mt-2">
                    {selectedProduct.options?.values?.map((value) => (
                      <button
                        key={value}
                        onClick={() => setSelectedValue(value)}
                        className={`px-4 py-2 rounded border ${
                          selectedValue === value ? "bg-black text-white" : ""
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <p className="text-gray-700">Quantity:</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => handleQuantityChange("minus")}
                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("plus")}
                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`bg-black text-white py-2 px-6 rounded w-full mb-4 hover:bg-[#1f2937] transition shadow-md hover:shadow-lg ${
                  isButtonDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-gray-900"
                }`}
              >
                {isButtonDisabled ? "Adding..." : "ADD TO CART"}
              </button>

              <div className="mt-10 text-gray-700">
                <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                <table className="w-full text-left text-sm text-gray-600 border-separate border-spacing-y-2">
                  <tbody>
                    {selectedProduct.category && (
                      <tr>
                        <td className="py-1 pr-4 text-gray-500">Category</td>
                        <td className="py-1">{selectedProduct.category}</td>
                      </tr>
                    )}

                    {selectedProduct.equipmentType && (
                      <tr>
                        <td className="py-1 pr-4 text-gray-500">Equipment type</td>
                        <td className="py-1">{selectedProduct.equipmentType}</td>
                      </tr>
                    )}

                    {selectedProduct.weightRange && (
                      <tr>
                        <td className="py-1 pr-4 text-gray-500">Weight range</td>
                        <td className="py-1">{selectedProduct.weightRange}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
              You May Also Like
            </h2>
            <ProductGrid products={similarProducts} loading={loading} error={error} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;
