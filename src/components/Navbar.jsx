import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">GRUB</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
            <Link to="/gallery" className="text-gray-800 hover:text-gray-600">Gallery</Link>
            <Link to="/package-gallery" className="text-gray-800 hover:text-gray-600">Packages</Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <Link to="/signin" className="w-full text-gray-700 bg-lime-100 hover:bg-lime-200 font-bold py-3 px-8 rounded-full transition duration-300 rounded-lg">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
              <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
              <Link to="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
              <Link to="/gallery" className="text-gray-800 hover:text-gray-600">Gallery</Link>
              <Link to="/package-gallery" className="text-gray-800 hover:text-gray-600">Packages</Link>
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link to="/signin" className="w-full text-gray-700 bg-lime-100 hover:bg-lime-200 font-bold py-3 px-8 rounded-full transition duration-300 rounded-lg">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;