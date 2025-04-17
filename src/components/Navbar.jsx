import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="glasmorphic text-white py-4 px-6 fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-md backdrop-blur-lg">
      <div className="text-xl font-bold tracking-wide">
        ISKCON <span className="text-orange-400">CDEC</span>
      </div>
      <div className="space-x-6 text-sm sm:text-base font-medium">
        <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
        <Link to="/gita" className="hover:text-orange-400 transition-colors">Learn Gita</Link>
        <Link to="/events" className="hover:text-orange-400 transition-colors">Events</Link>
        <Link to="/gallery" className="hover:text-orange-400 transition-colors">Gallery</Link>
        <Link to="/donate" className="hover:text-orange-400 transition-colors">Donate</Link>
        <Link to="/service" className="hover:text-orange-400 transition-colors">Serivce</Link>
        <Link to="/schedule" className="hover:text-orange-400 transition-colors">Schedule</Link>
      </div>
    </nav>
  );
}
