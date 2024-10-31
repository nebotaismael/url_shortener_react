import About from "../../components/about/About";
import Boost from "../../components/boost/Boost";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Shorten from "../../components/shorten/UrLShortener";

import { Background } from "./LandingPage.styles";

export default function LandingPage() {
  return (
    <Background><Navbar/>
      <Hero />
      <Shorten />

      <About />
      <Boost />
      <Footer/>
    </Background>
  );
}
