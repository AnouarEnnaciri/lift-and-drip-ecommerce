import { Link } from "react-router-dom";

const ProductGrid = ({ products = [], loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {(products ?? []).map((product, index) => {
        const imgUrl = product?.images?.[0]?.url || product?.image || "";
        const alt = product?.images?.[0]?.altText || product?.name || "Product";

        return (
          <Link key={product?._id || index} to={`/product/${product?._id}`} className="block">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-full h-96 mb-4">
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={alt}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg" />
                )}
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm font-medium mb-1">{product?.name}</h3>
                <p className="text-gray-500 font-medium text-sm">{product?.price} DH</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
