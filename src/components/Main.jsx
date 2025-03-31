import { Link } from "react-router-dom";
import '../App.css';
import ChangeCity from "./ChangeCity";

const Main = () => {
  return (
    <div className="relative h-screen hero-bg">
      {/* Centered Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to GRUB
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover <ChangeCity /> with Discounts like never before!
          </p>
          <Link to="../package-gallery" className="text-gray-700 bg-lime-100 hover:bg-lime-200 font-bold py-3 px-8 rounded-full transition duration-300">
            <button>
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;