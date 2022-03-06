import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins min-h-screen min-w-screen bg-hero-bg bg-cover bg-no-repeat">
      <Navbar />
      <Hero />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
