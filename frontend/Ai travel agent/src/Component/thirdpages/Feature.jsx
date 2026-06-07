import React from "react";
import FeaturesPage from "../../Home/Features";

function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Trip Planning",
      desc: "Generate personalized travel plans based on your budget and preferences.",
    },
    {
      icon: "💰",
      title: "Budget Optimizer",
      desc: "Find the best travel options within your budget.",
    },
    {
      icon: "🏨",
      title: "Hotel Suggestions",
      desc: "Discover affordable and highly rated accommodations.",
    },
    {
      icon: "🌦️",
      title: "Live Weather",
      desc: "Get real-time weather updates for your destination.",
    },
    {
      icon: "🗺️",
      title: "Smart Routes",
      desc: "Find the fastest and most efficient travel routes.",
    },
    {
      icon: "🚆",
      title: "Transport Planning",
      desc: "Compare train, bus and flight options instantly.",
    },
  ];

  return (
    <section className="py-24 relative">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
            ✨ Premium Features
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Everything You Need For
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Smart Travel Planning
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            AI recommendations, hotel suggestions, budget management,
            weather intelligence and route optimization — all in one platform.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-500/40
                hover:shadow-2xl
              "
            >

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-3xl border border-white/10">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-white text-xl font-semibold mt-6">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-400 mt-4 leading-7">
                {feature.desc}
              </p>

              {/* Button */}
              <button className="relative z-10 mt-6 text-cyan-400 font-medium group-hover:translate-x-2 transition-transform">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;