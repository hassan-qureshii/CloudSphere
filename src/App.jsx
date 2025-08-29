import Navbar from "./Components/Navbar";
import Hero  from "./Components/Hero";
import About from "./Components/About";
import Support from "./Components/Support";
import AllInOne from './Components/AllInOne';
import Pricing from "./Components/Pricing";
import Footer from './Components/Footer'

export default function App() {
  return (
  <div> 
    <Navbar />
    <Hero />
    <About />
    <Support />
    <AllInOne />
    <Pricing />
    <Footer />
  </div>
  )
}