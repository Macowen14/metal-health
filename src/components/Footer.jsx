import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // For social icons

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8" id="contact">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <Link to="/privacy" className="hover:text-yellow-500">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-yellow-500">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </div>

        {/* Contact details section */}
        <div className="mb-4">
          <p className="text-sm">
            <strong>Email:</strong> contact@mindcare.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 123 MindCare Ave, City, State, 12345
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} MindCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
