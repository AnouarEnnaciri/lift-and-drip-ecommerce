import Hero from "../components/Layout/Hero";
import GymCollectionSection from "../components/Products/GymCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [sections, setSections] = useState({
    featured: [],
    bestSellers: [],
    topStrength: [],
    topConditioning: [],
  });

  const [loadingSections, setLoadingSections] = useState(true);
  const [sectionsError, setSectionsError] = useState("");

  useEffect(() => {
    const fetchHomeSections = async () => {
      try {
        setLoadingSections(true);
        setSectionsError("");

        const response = await axios.get(`/api/products/home/sections?limit=8`);

        setSections(response.data);
      } catch (error) {
        console.error(error);
        setSectionsError(
          error?.response?.data?.message || error.message || "Failed to load sections"
        );
      } finally {
        setLoadingSections(false);
      }
    };

    fetchHomeSections();
  }, []);

  return (
    <div>
      <Hero />
      <GymCollectionSection />
      <NewArrivals />

      {sectionsError ? (
        <p className="text-center text-red-500 mb-6">{sectionsError}</p>
      ) : null}

      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <div className="container mx-auto mb-10">
        {loadingSections ? (
          <p className="text-center">Loading best seller product...</p>
        ) : sections.bestSellers.length > 0 ? (
          <ProductGrid products={sections.bestSellers} />
        ) : (
          <p className="text-center">No best sellers found.</p>
        )}
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Strength Equipment
        </h2>

        {loadingSections ? (
          <p className="text-center">Loading top strength...</p>
        ) : sections.topStrength.length > 0 ? (
          <ProductGrid products={sections.topStrength} />
        ) : (
          <p className="text-center">No top strength products found.</p>
        )}
      </div>

      <h2 className="text-3xl text-center font-bold mb-4 mt-16">
        Top Conditioning Gear
      </h2>
      <div className="container mx-auto mb-10">
        {loadingSections ? (
          <p className="text-center">Loading conditioning gear...</p>
        ) : sections.topConditioning.length > 0 ? (
          <ProductGrid products={sections.topConditioning} />
        ) : (
          <p className="text-center">No conditioning products found.</p>
        )}
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
