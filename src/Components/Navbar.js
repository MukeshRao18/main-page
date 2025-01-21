import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-500">
              Aurjobs Sourcing AI Portal
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/CandidateRegistration"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Candidate Registration 
            </Link>
            <div>|</div>
            <Link
              to="/SearchCandidates"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Search Candidates
            </Link>
            <div>|</div>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Pricing
            </Link>
            <div>|</div>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-md font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/CandidateRegistration"
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Candidate Registration
            </Link>
            <Link
              to="/SearchCandidates"
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Search Candidates
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
