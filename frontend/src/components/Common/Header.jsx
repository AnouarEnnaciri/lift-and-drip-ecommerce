import Topbar from "../Layout/Topbar.jsx";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <header className="border-b border-gray-200">
       {/* Topbar */}
       <Topbar />
       {/* Navbar */}
       <Navbar />
       {/* Cart Drawer */}
    </header>
  );
}

export default Header