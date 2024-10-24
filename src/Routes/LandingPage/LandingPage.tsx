import About from "../../components/about/About";
import Boost from "../../components/boost/Boost";
import Hero from "../../components/hero/Hero";
import Shorten from "../../components/shorten/Shorten";
import { Background } from "./LandingPage.styles";

export default function LandingPage() {
  return (
    <Background>
      <Hero />
      <Shorten/>
   
 <About/>
 <Boost/>
    </Background>
  );
}
