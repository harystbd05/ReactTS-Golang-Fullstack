import { useState } from "react";
import { Link } from "react-router-dom";
import logoIndex from "../../assets/img/vercel.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logoIndex} className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HR</span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex justify-center space-x-4 font-medium">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800 dark:hover:text-white" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800 dark:hover:text-white" aria-current="page">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800 dark:hover:text-white" aria-current="page">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/register"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Login
            </Link>
          </div>
        </div>
        <div
          className={`${isMobileMenuOpen ? "flex" : "hidden"} flex-col lg:hidden w-full`}
          id="mobile-menu-2"
        >
          <Link
            to="/register"
            className="block text-center text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 mt-4"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block text-center text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 mt-4"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
