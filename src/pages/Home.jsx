// Example Home.jsx structure
import {Link } from "react-router-dom";

export default function Home() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 pt-28">

        <div className="glasmorphic max-w-3xl text-center p-10 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-orange-400">ISKCON CDEC</span>
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-slate-200">
            Enlightening lives through the timeless teachings of Bhagavad Gita.
            Join our spiritual journey and be part of a vibrant devotional community.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/gita
              "
              className="btn btn-primary text-sm sm:text-base"
            >
              Learn Bhagavad Gita
            </a>
            <a
              href="/service"
              className="btn btn-secondary text-sm sm:text-base"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    );
  }
  