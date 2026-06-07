import React from "react";

function TrainSection({ trains = [] }) {
  if (!Array.isArray(trains) || trains.length === 0) {
    return null;
  }

  return (
    <div className="bg-slate-800/70 backdrop-blur-xl border border-slate-700 p-6 rounded-3xl shadow-xl">
      <h2 className="text-cyan-400 text-2xl font-bold mb-5 flex items-center gap-2">
        <span>🚆</span> Train Suggestions
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {trains.map((train, index) => (
          <div
            key={train.number || index}
            className="bg-slate-700/60 border border-slate-600 p-5 rounded-2xl hover:scale-[1.02] hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
          >
            {/* Train Header */}
            <div className="flex justify-between items-start border-b border-slate-600/50 pb-3 mb-3">
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {train.name || "Train Name"}
                </h3>

                <p className="text-gray-400 text-xs mt-0.5">
                  #{train.number || "N/A"}
                </p>
              </div>

              <span className="text-xs bg-purple-500/20 text-purple-400 px-2.5 py-1 rounded-full border border-purple-500/30 font-medium">
                {train.class || "General"}
              </span>
            </div>

            {/* Route */}
            <div className="space-y-2 text-sm">
              <p className="text-cyan-400 font-semibold flex items-center gap-1">
                📍 {train.departure || "Source"} →{" "}
                {train.arrival || "Destination"}
              </p>

              <div className="flex justify-between items-center text-gray-300 pt-1">
                <p className="text-yellow-400 flex items-center gap-1">
                  ⏱{" "}
                  <span className="font-medium">
                    {train.duration || "N/A"}
                  </span>
                </p>

                <p className="text-green-400 font-bold text-base">
                  ₹{train.total_fare || "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainSection;