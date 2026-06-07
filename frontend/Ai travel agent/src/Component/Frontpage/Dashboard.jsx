import React from "react";
import { getPlace } from "../../servers/placeService.js";

function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl p-8 mb-8">

        <h1 className="text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="text-white/80 mt-2">
          Your AI Travel Dashboard is ready.
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-gray-400">Budget</p>
          <h3 className="text-2xl font-bold text-white mt-2">₹4000</h3>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-gray-400">Weather</p>
          <h3 className="text-2xl font-bold text-white mt-2">28°C</h3>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-gray-400">Hotels</p>
          <h3 className="text-2xl font-bold text-white mt-2">15</h3>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-gray-400">Places</p>
          <h3 className="text-2xl font-bold text-white mt-2">12</h3>
        </div>

      </div>

      {/* Main Dashboard */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* AI Assistant */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-2xl font-bold text-white">
              Popular Destinations
            </h2>

            <span className="text-cyan-400">
              Trending
            </span>

          </div>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-3">🛕</div>
              <h3 className="text-white font-semibold">Ujjain</h3>
              <p className="text-slate-400 text-sm mt-2">
                Spiritual destination
              </p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-3">🏖️</div>
              <h3 className="text-white font-semibold">Goa</h3>
              <p className="text-slate-400 text-sm mt-2">
                Beaches and nightlife
              </p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/10">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="text-white font-semibold">Manali</h3>
              <p className="text-slate-400 text-sm mt-2">
                Mountains and adventure
              </p>
            </div>

          </div>

        </div>
        {/* Upcoming Trips */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

          <h2 className="text-xl font-bold text-white mb-6">
            Upcoming Trips
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 rounded-xl p-4 text-white">
              🛕 Ujjain Trip
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-white">
              🏖 Goa Vacation
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-white">
              🏛 Delhi Tour
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Recommended Places */}
        {/* Recommended Places */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              Recommended Destinations
            </h2>

            <span className="text-cyan-400 text-sm">
              AI Suggested
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            {[
              {
                name: "Ujjain",
                icon: "🛕",
                desc: "Mahakaleshwar Jyotirlinga"
              },
              {
                name: "Omkareshwar",
                icon: "🙏",
                desc: "Sacred Narmada Island"
              },
              {
                name: "Maheshwar",
                icon: "🏛",
                desc: "Historic Temple City"
              },
              {
                name: "Chitrakoot",
                icon: "🌄",
                desc: "Spiritual Pilgrimage Site"
              }
            ].map((place) => (
              <div
                key={place.name}
                className="
          group
          p-5
          rounded-2xl
          bg-slate-900/60
          border
          border-white/10
          hover:border-cyan-500/40
          hover:-translate-y-1
          transition-all
          duration-300
        "
              >
                <div className="text-3xl mb-3">
                  {place.icon}
                </div>

                <h3 className="text-white font-semibold text-lg">
                  {place.name}
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  {place.desc}
                </p>

                <div className="mt-4 text-cyan-400 text-sm font-medium">
                  View Details →
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Budget Analytics */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

          <h2 className="text-xl font-bold text-white mb-5">
            💰 Budget Analytics
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between text-gray-300">
              <span>🚆 Transport</span>
              <span>₹500</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>🏨 Hotel</span>
              <span>₹1200</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>🍽 Food</span>
              <span>₹800</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>🚕 Local Travel</span>
              <span>₹500</span>
            </div>

            <hr className="border-slate-700" />

            <div className="flex justify-between text-white font-bold text-lg">
              <span>Total</span>
              <span>₹3000</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;