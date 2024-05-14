import { useState } from "react";
import { IoBook } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed w-full z-10 bg-blue-600 border-b-2">
      <div className="container flex justify-between items-center py-4 px-10 md:px-0">
        <div className="flex items-center px-5">
          <IoBook className="text-white text-3xl mr-2" />
          <h1 className="text-2xl font-bold text-white">Learn From Friends</h1>
        </div>
        <nav className="hidden md:flex md:items-center">
          <ul className="md:flex gap-5 text-white px-5">
            <NavLink
              to="/"
              activeClassName="font-bold"
              className="hover:text-black hover:bg-blue-300 p-2 rounded-xl hover:font-bold hover:duration-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/notes"
              activeClassName="font-bold"
              className="hover:text-black hover:bg-blue-300 p-2 rounded-xl hover:font-bold hover:duration-500"
            >
              Notes
            </NavLink>
            <NavLink
              to="/courses"
              activeClassName="font-bold"
              className="hover:text-black hover:bg-blue-300 p-2 rounded-xl hover:font-bold hover:duration-500"
            >
              Courses
            </NavLink>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
