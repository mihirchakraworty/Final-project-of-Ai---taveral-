import React, { useState } from "react";
import { getPlace } from "../../servers/placeService";

function PopularDestinations() {
  const [search, setSearch] = useState("");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) return;

    try {
      setLoading(true);

      const data = await getPlace(search.trim());

      // Prevent duplicate cards
      const exists = places.some(
        (p) =>
          p.title?.toLowerCase() === data.title?.toLowerCase()
      );

      if (!exists) {
        setPlaces((prev) => [data, ...prev]);
      }

      setSearch("");
    } catch (err) {
      console.error(err);
      alert("Place not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
            Explore Destinations
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Popular Destinations
          </h2>

          <p className="text-slate-400 mt-4">
            Search any city, temple, destination or tourist place
          </p>

        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-3 mb-10">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSearch()
            }
            placeholder="Search Ujjain, Goa, Manali..."
            className="
              flex-1
              p-4
              rounded-2xl
              bg-slate-900
              border
              border-slate-800
              text-white
              outline-none
              focus:border-cyan-500
            "
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              text-white
              font-medium
              hover:scale-105
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Searching..." : "Search"}
          </button>

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center mb-8">
            <p className="text-cyan-400">
              Searching destination...
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && places.length === 0 && (
          <div className="text-center py-12 border border-white/10 rounded-3xl bg-white/5">
            <h3 className="text-white text-xl font-semibold">
              No Destinations Yet
            </h3>

            <p className="text-slate-400 mt-2">
              Search for a destination to get started.
            </p>
          </div>
        )}

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {places.map((place, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:border-cyan-500/30
                transition-all
                duration-300
              "
            >

              {place?.image ? (
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="h-56 flex items-center justify-center bg-slate-900 text-slate-500">
                  No Image Available
                </div>
              )}

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {place?.title}
                </h3>

                <p className="text-slate-400 mt-4 line-clamp-4">
                  {place?.description}
                </p>

                <button className="mt-5 text-cyan-400 font-medium hover:text-cyan-300">
                  Explore →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;