import React from 'react'
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Learn Gita", path: "/gita" },
    { name: "Events", path: "/events" },
    { name: "Schedule", path: "/schedule" },
    { name: "Service", path: "/service" },
    { name: "Donate", path: "/donate" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="shadow-md glasmorphic max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-white.png" alt="ISKCON CDEC" className="h-10 w-auto" />
          <span className="text-xl text-white">ISKCON CDEC</span>
        </Link>

        
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-colors ${
                currentPath === item.path ? "text-orange-600 font-semibold" : "hover:text-orange-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2 shadow">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium ${
                currentPath === item.path ? "text-orange-600 font-semibold" : "text-gray-700 hover:text-orange-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
