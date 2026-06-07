import React from "react";

function PlannerHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute top-0 left-20 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-slate-900/70 backdrop-blur-xl">

              <span className="text-cyan-400">✨</span>

              <span className="text-gray-300 text-sm font-medium">
                AI Powered Travel Planning
              </span>

            </div>

            {/* Heading */}
            <h1 className="mt-8 text-6xl lg:text-8xl font-extrabold leading-tight text-white">

              Build Your Perfect

              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Travel Experience
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 text-xl text-slate-400 leading-9 max-w-3xl">

              Tell us your budget, destination, travel style and duration.
              Our AI instantly creates personalized itineraries, hotel
              suggestions, transportation options and complete trip plans.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button
                className="
                px-8 py-4
                rounded-2xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                hover:scale-105
                transition-all
                "
              >
                Generate Trip
              </button>

              <button
                className="
                px-8 py-4
                rounded-2xl
                border
                border-slate-700
                text-white
                hover:bg-slate-900
                transition
                "
              >
                View Demo
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-14 max-w-2xl">

              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Destinations
                </p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">AI</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Powered
                </p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Planning
                </p>
              </div>

            </div>

          </div>

          {/* Right Side AI Preview */}
          <div>

            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 shadow-2xl">

              {/* Window Dots */}
              <div className="flex gap-2 mb-5">

                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>

              </div>

              {/* User Query */}
              <div className="bg-slate-800 p-4 rounded-2xl text-white mb-4">

                Plan a 3-day trip to Goa under ₹10,000

              </div>

              {/* AI Response */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 p-5 rounded-2xl">

                <h3 className="text-cyan-400 font-semibold mb-3">
                  🤖 AI Travel Plan
                </h3>

                <ul className="space-y-3 text-slate-300">

                  <li>🏖 Day 1 - Baga Beach</li>
                  <li>⛪ Day 2 - Old Goa Churches</li>
                  <li>🌅 Day 3 - Fort Aguada</li>

                </ul>

                <div className="mt-5 text-white">

                  Estimated Budget:
                  <span className="text-cyan-400 font-bold ml-2">
                    ₹8,500
                  </span>

                </div>

              </div>

              {/* Search Input */}
              

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PlannerHero;