import Hero from "../components/Layout/Hero";
import GymCollectionSection from "../components/Products/GymCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductsDetails from "../components/Products/ProductsDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/productsSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    dispatch(
      fetchProductsByFilters({
        category: "Strength Equipment",
        limit: 8,
      })
    );

    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProducts(response.data); // array of products
      } catch (error) {
        console.error(error);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GymCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4"> Best Seller</h2>
      <div className="container mx-auto mb-10">
        {bestSellerProducts.length > 0 ? (
          <ProductGrid products={bestSellerProducts} />
        ) : (
          <p className="text-center">Loading best seller product...</p>
        )}
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Strength Equipment
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
