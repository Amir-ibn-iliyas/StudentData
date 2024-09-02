import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [nestedMenuOpen, setNestedMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNestedMenu = () => {
    setNestedMenuOpen(!nestedMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between  bg-green-200 py-4 px-10">
        {/* Login Button */}
        <div className="w-12  h-12 rounded-full border-2  border-blue-400 flex items-center justify-center text-sm font-semibold"> Logo</div>

        {/* Menu Items */}
        <ul className="flex space-x-10">
          <li>
            <a href="#" className="hover:text-blue-400 font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 font-medium">
              Students
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 font-medium">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 font-medium">
              Contact
            </a>
          </li>
        </ul>

        {/* Dashboard Button */}
        <button className=" button text-black-500 hover:text-white   ">Dashboard</button>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden relative ">
        <div className="  flex  justify-between items-center px-6 bg-green-200">
        <div className="w-10 h-10 rounded-full border-2  border-blue-400 flex items-center justify-center text-sm font-semibold"> Logo</div>
        <button className="p-4" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        </div>
     
        {/* Mobile Menu */}
        <div
          className={` ${
            isMobileMenuOpen
              ? " bg-green-200 w-full py-4 transition-transform duration-700 translate-y-0"
              : "absolute  bg-green-200 w-full py-4 transition-transform duration-700 translate-y-[-380px]"
          }`}
        >
          <ul className="flex flex-col items-start px-10 space-y-4 font-semibold">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
            {/* Nested Items Example */}
            <li>
              <button
                className="hover:text-blue-500 flex items-center"
                onClick={toggleNestedMenu}
              >
                More
                <svg
                  className={`w-4 h-4 ml-2 transform transition-transform ${
                    nestedMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <ul
                className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                  nestedMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
                }`}
              >
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Subitem 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Subitem 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
