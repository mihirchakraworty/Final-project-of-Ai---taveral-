import React from "react";
import Plane from "../../Home/Plane";
function BudgetBreakdown() {
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            💰 Budget Breakdown
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Estimated Trip Cost
          </p>
        </div>

        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/20">
          Budget Friendly
        </span>

      </div>

      {/* Budget Items */}
      <div className="space-y-4">

        <div className="bg-slate-800 rounded-2xl p-4 flex justify-between items-center">
          <span className="text-gray-300">🚆 Transport</span>
          <span className="text-white font-semibold">₹500</span>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4 flex justify-between items-center">
          <span className="text-gray-300">🏨 Hotel</span>
          <span className="text-white font-semibold">₹1200</span>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4 flex justify-between items-center">
          <span className="text-gray-300">🍽 Food</span>
          <span className="text-white font-semibold">₹800</span>
        </div>

        <div className="bg-slate-800 rounded-2xl p-4 flex justify-between items-center">
          <span className="text-gray-300">🚕 Local Travel</span>
          <span className="text-white font-semibold">₹500</span>
        </div>

      </div>

      {/* Total */}
      <div className="mt-6 pt-4 border-t border-slate-700">

        <div className="flex justify-between items-center">

          <span className="text-lg font-semibold text-white">
            Total Estimated Cost
          </span>

          <span className="text-2xl font-bold text-cyan-400">
            ₹3000
          </span>

        </div>

      </div>

      {/* Budget Progress */}
      <div className="mt-5">

        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Budget Used</span>
          <span>75%</span>
        </div>

        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
        </div>

      </div>

    </div>
  );
}

export default BudgetBreakdown;