import Hero from "../components/Layout/Hero";
import GymCollectionSection from "../components/Products/GymCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductsDetails from "../components/Products/ProductsDetails";
const Home = () => {
  return (
    <div>
        <Hero />
        <GymCollectionSection />
        <NewArrivals />

        {/* Best Sellers Section*/}
        <h2 className="text-3xl text-center font-bold mb-4"> Best Seller</h2>
        <ProductsDetails />
    </div>
  )
}

export default Home