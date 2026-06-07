import React from "react";
import Plane from "../../Home/Plane";

function TravelFilters() {
  return (
    <div className="max-w-4xl mx-auto mt-6">

      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">

        <div className="text-center mb-5">

          <h2 className="text-xl font-bold text-white">
            Travel Preferences
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Customize your trip experience
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Trip Type
            </label>

            <select
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                p-3
                rounded-xl
                text-white
                outline-none
                focus:border-cyan-400
              "
            >
              <option>🛕 Religious</option>
              <option>🏔 Adventure</option>
              <option>👨‍👩‍👧 Family</option>
              <option>🎒 Solo</option>
              <option>💑 Couple</option>
              <option>🏖 Beach</option>
            </select>

          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-2">
              Transport
            </label>

            <select
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                p-3
                rounded-xl
                text-white
                outline-none
                focus:border-cyan-400
              "
            >
              <option>🚆 Train</option>
              <option>🚌 Bus</option>
              <option>✈️ Flight</option>
              <option>🚗 Car</option>
            </select>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TravelFilters;