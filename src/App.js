import {} from "styled-components";
import { GlobalStyle } from "./examples/Apple/GlobalStyles";
import DesignSection from "./examples/Apple/sections/DesignSection";
import DisplaySection from "./examples/Apple/sections/DisplaySection";
import HeroSection from "./examples/Apple/sections/HeroSection";
import PhoneModel from "./examples/Apple/sections/PhoneModel";
import Quote from "./examples/Apple/sections/Quote";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSection />
      <DisplaySection />
    </>
  );
}

export default App;
