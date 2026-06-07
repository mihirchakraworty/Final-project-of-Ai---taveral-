import React from "react";
import Feature from "../Component/thirdpages/Feature";
import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <Feature />

      <Footer />
    </div>
  );
}

export default FeaturesPage;