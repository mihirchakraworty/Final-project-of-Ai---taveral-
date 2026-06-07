import Navbar from "../Component/navbar";
import Hero from "../Component/Frontpage/Hero";
import Footer from "../Component/Footer";
import Dashboard from "../Component/Frontpage/Dashboard";
import PopularDestinations from "../Component/Frontpage/PopularDestinations";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

      </div>

      <Navbar />

      <main className="relative z-10">

        {/* Hero */}
        <section>
          <Hero />
        </section>

        {/* Dashboard / Trip Planner */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <Dashboard />
        </section>


         <section className="max-w-5xl mx-auto px-4 py-10">
          <PopularDestinations />
        </section>

  

      </main>

      <Footer />

    </div>
  );
}

export default Home;