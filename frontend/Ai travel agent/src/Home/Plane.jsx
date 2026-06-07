import React from "react";
import PlannerHero from "../Component/Secondpagea/PlannerHero";
import TripForm from "../Component/Secondpagea/TripForm";
import TravelFilters from "../Component/Secondpagea/TravelFilter";
import ResultCards from "../Component/Secondpagea/Resultcard";
import Itinerary from "../Component/Secondpagea/Itinerary";
import BudgetBreakdown from "../Component/Secondpagea/BudgetBreakdown";

function Plane() {
  return (
    <div>
      <PlannerHero />
      <TripForm />
      <TravelFilters />
      <ResultCards />
      <Itinerary />
    </div>
  );
}

export default Plane