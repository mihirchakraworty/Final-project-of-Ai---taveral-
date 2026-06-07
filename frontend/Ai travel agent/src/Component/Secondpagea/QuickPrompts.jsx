import Plane from "../../Home/Plane";
import React from "react";

function QuickPrompts() {

  const prompts = [
    "🛕 Religious Trip Under ₹4000",
    "👨‍👩‍👧 Family Vacation",
    "🏔 Adventure Trip",
    "🏖 Weekend Getaway",
    "💑 Couple Tour",
    "🎒 Solo Travel",
  ];

  return (
    <div className="max-w-4xl mx-auto mt-6">

      <div className="text-center mb-4">

        <h2 className="text-xl font-bold text-white">
          Popular AI Prompts
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Click any prompt to generate a travel plan instantly
        </p>

      </div>

      <div className="flex flex-wrap justify-center gap-3">

        {prompts.map((prompt, index) => (
          <button
            key={index}
            className="
              px-4
              py-2
              rounded-full
              bg-slate-900/80
              border
              border-slate-800
              text-gray-300
              text-sm
              hover:border-cyan-500
              hover:text-white
              hover:bg-slate-800
              transition-all
            "
          >
            {prompt}
          </button>
        ))}

      </div>

    </div>
  );
}

export default QuickPrompts;