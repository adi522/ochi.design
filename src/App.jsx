import About from "./components/About";
import Cards from "./components/Cards";
import ClientReview from "./components/ClientReview";
import Eyes from "./components/Eyes";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen bg-gray-300/25">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Projects />
      <ClientReview />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
