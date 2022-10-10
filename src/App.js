import {} from "styled-components";
import { GlobalStyle } from "./examples/Apple/GlobalStyles";
import HeroSection from "./examples/Apple/sections/HeroSection";
import PhoneModel from "./examples/Apple/sections/PhoneModel";
import Quote from "./examples/Apple/sections/Quote";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <HeroSection />
      <PhoneModel />
    </>
  );
}

export default App;
