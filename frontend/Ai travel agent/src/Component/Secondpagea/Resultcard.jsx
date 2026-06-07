import React from "react";
import Plane from "../../Home/Plane";

function ResultCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">

      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <p className="text-gray-400">Places</p>
        <h3 className="text-white text-xl mt-2">12</h3>
      </div>

      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <p className="text-gray-400">Hotels</p>
        <h3 className="text-white text-xl mt-2">15</h3>
      </div>

      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <p className="text-gray-400">Weather</p>
        <h3 className="text-white text-xl mt-2">28°C</h3>
      </div>

      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
        <p className="text-gray-400">Budget</p>
        <h3 className="text-white text-xl mt-2">₹3500</h3>
      </div>

    </div>
  );
}

export default ResultCards;