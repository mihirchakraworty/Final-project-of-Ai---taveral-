import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

function Navbar() {
  return (
    <nav className=" top-0 left-0 bottom-1000 w-full z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >

          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">

            <span className="text-sm">
              ✈️
            </span>

          </div>

          <div>

            <h1 className="text-base md:text-lg font-bold text-white">
              AI Travel Planner
            </h1>

            <p className="hidden md:block text-[10px] text-slate-400">
              Smart Travel Assistant
            </p>

          </div>

        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium">

          <li>
            <Link
              to="/"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/planner"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Planner
            </Link>
          </li>



          <li>
            <Link
              to="/dashboard"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Features
            </Link>
          </li>


          <li>
            <Link
              to="/login"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Login
            </Link>
          </li>

          <a
            href="https://app.trugen.ai/agent/c2a9c67f-ed86-4d90-bf3c-cdd2c2d7ef8d"
            target="_blank"
            rel="noopener noreferrer"
            className="
    px-3 py-1.5 rounded-lg text-sm font-medium
    text-white bg-gradient-to-r
    from-cyan-500 to-purple-600
    hover:scale-105 transition-all
  "
          >
            AI Assistant ✨
          </a>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          <Link
            to="/login"
            className="
              hidden
              md:block
              px-3
              py-1.5
              rounded-lg
              text-sm
              border
              border-slate-700
              text-slate-300
              hover:bg-slate-800
              transition
            "
          >
            Sign In
          </Link>

          <Link
            to="/planner"
            className="
              px-3
              py-1.5
              rounded-lg
              text-sm
              font-medium
              text-white
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              hover:scale-105
              transition-all
            "
          >
            Plan Trip
          </Link>

        </div>

      </div>

      {/* Bottom Glow Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

    </nav>
  );
}

export default Navbar;