import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavImage from "../assets/nav.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Brand Image */}
        <Link
          to="/"
          className="text-xl font-bold flex items-center space-x-3 hover:text-blue-300 transition-colors duration-300"
        >
          <img
            src={NavImage}
            alt="MindCare"
            className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-md"
          />
          <span className="text-xl text-white">MindCare</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/resources" className="hover:text-blue-300">
            Resources
          </Link>
          {/* Use HashLink for About section */}
          <HashLink smooth to="/#about" className="hover:text-blue-300">
            About
          </HashLink>
          <HashLink to="/#contact" className="hover:text-blue-300 ">
            Contact
          </HashLink>
          <HashLink smooth to="/#specialists" className="hover:text-blue-300">
            Specialists
          </HashLink>
          <HashLink smooth to="/#faq" className="hover:text-blue-300">
            FAQ
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link to="/" className="block py-2 px-4 hover:bg-blue-500">
            Home
          </Link>
          <Link to="/resources" className="block py-2 px-4 hover:bg-blue-500">
            Resources
          </Link>

          <HashLink
            smooth
            to="/#about"
            className="block py-2 px-4 hover:bg-blue-500"
          >
            About
          </HashLink>

          <Link to="/contact" className="block py-2 px-4 hover:bg-blue-500">
            Contact
          </Link>

          <HashLink
            smooth
            to="/#specialists"
            className="block py-2 px-4 hover:bg-blue-500"
          >
            Specialists
          </HashLink>

          <HashLink
            smooth
            to="/#faq"
            className="block py-2 px-4 hover:bg-blue-500"
          >
            FAQ
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
