import React from "react";

function Itinerary({ itinerary }) {
  if (!itinerary) return null;

  const days =
    itinerary.match(
      /Day\s+\d+[\s\S]*?(?=Day\s+\d+|$)/gi
    ) || [itinerary];

  return (
    <section className="mt-10">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
            AI Generated Plan
          </span>

          <h2 className="text-4xl font-bold text-white mt-4">
            Travel Itinerary
          </h2>

          <p className="text-slate-400 mt-2">
            Personalized day-by-day journey created by AI
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl">
          <span className="text-cyan-400 font-semibold">
            {days.length} Day Plan
          </span>
        </div>

      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

        <div className="space-y-8">

          {days.map((day, index) => (
            <div
              key={index}
              className="relative pl-16"
            >

              {/* Dot */}
              <div className="
                absolute
                left-0
                top-4
                w-12
                h-12
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                flex
                items-center
                justify-center
                text-white
                font-bold
                shadow-lg
              ">
                {index + 1}
              </div>

              {/* Card */}
              <div
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  hover:border-cyan-500/30
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Day {index + 1}
                </h3>

                <div className="text-slate-300 whitespace-pre-wrap leading-8">

                  {day
                    .replace(/Day\s+\d+[:\-]?/i, "")
                    .replace(/Morning:/gi, "\n🌅 Morning:")
                    .replace(/Afternoon:/gi, "\n☀️ Afternoon:")
                    .replace(/Evening:/gi, "\n🌙 Evening:")
                    .replace(/Night:/gi, "\n🌃 Night:")
                    .replace(/Estimated Cost:/gi, "\n💰 Estimated Cost:")
                    .replace(
                      /Tourist Attractions:/gi,
                      "\n🏛 Tourist Attractions:"
                    )
                    .replace(
                      /Local Foods:/gi,
                      "\n🍜 Local Foods:"
                    )
                    .trim()}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Itinerary;