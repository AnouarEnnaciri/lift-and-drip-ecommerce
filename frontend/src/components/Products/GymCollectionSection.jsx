import Strengthequipment from "../../assets/pexels-rdne-7187871.jpg";
import Gearequipment from "../../assets/pexels-gustavo-fring-6699111.jpg";
import { Link } from "react-router-dom";

const GymCollectionSection = () => {
  return (
    <section className="py-15 px-4 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
            {/*Gear equipment*/}
            <div className="relative flex-1">
                <img src={Gearequipment}
                alt="Gear Equipment"
                className="w-full h-[700px] object-cover"/>
                <div className="absolute bottom-8 left-08 bg-white bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Conditioning Gear
                    </h2> 
                    <Link 
                    to="/collections/all?category=conditioning-gear"
                    className="text-gray-900 underline"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
            {/* Men's Collection */}
             <div className="relative flex-1">
                <img src={Strengthequipment}
                alt="Gear Equipment"
                className="w-full h-[700px] object-cover"/>
                <div className="absolute bottom-8 left-08 bg-white bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Strength Equipment
                    </h2> 
                    <Link 
                    to="/collections/all?category=strength-equipment"
                    className="text-gray-900 underline"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GymCollectionSection