import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm">
              🚀 AI Powered Travel Planning
            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-white">
              Plan Your Next
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Dream Journey
              </span>
              With AI
            </h1>

            <p className="mt-8 text-lg text-slate-400 max-w-2xl leading-8">
              Discover destinations, compare budgets, check weather,
              find hotels and generate complete itineraries with an
              intelligent AI travel assistant.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all">
                Start Planning
              </button>

              <button className="px-8 py-4 rounded-2xl border border-slate-700 text-white hover:bg-slate-900 transition">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">10K+</h3>
                <p className="text-slate-400">Trips Planned</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">150+</h3>
                <p className="text-slate-400">Destinations</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">98%</h3>
                <p className="text-slate-400">Satisfaction</p>
              </div>

            </div>

          </div>

          {/* Right Dashboard Preview */}
          <div className="relative">

            {/* Floating Card */}
            <div className="absolute -top-5 -left-5 z-10 bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-xl px-5 py-3 rounded-2xl">
              ✈️ Smart Planning
            </div>

            <div className="absolute -bottom-5 -right-5 z-10 bg-purple-500/10 border border-purple-500/20 backdrop-blur-xl px-5 py-3 rounded-2xl">
              💰 Budget Optimized
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl">

              {/* Window Dots */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-2xl text-white mb-5">
                I want a religious trip under ₹4000 from Madhya Pradesh
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-5">

                <h3 className="text-white font-semibold mb-4">
                  🤖 Recommended Destinations
                </h3>

                <div className="space-y-3 text-slate-300">
                  <div>📍 Ujjain</div>
                  <div>📍 Omkareshwar</div>
                  <div>📍 Maheshwar</div>
                </div>

                <div className="mt-6 text-cyan-400 font-semibold">
                  Estimated Budget: ₹3500
                </div>

              </div>

              <input
                type="text"
                placeholder="Ask AI about your next trip..."
                className="mt-5 w-full p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white outline-none focus:border-cyan-400"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;