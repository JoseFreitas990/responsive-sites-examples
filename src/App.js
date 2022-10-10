import {} from "styled-components";
import { GlobalStyle } from "./examples/Apple/GlobalStyles";
import BatterySection from "./examples/Apple/sections/BatterySection";
import DesignSection from "./examples/Apple/sections/DesignSection";
import DisplaySection from "./examples/Apple/sections/DisplaySection";
import HeroSection from "./examples/Apple/sections/HeroSection";
import PhoneModel from "./examples/Apple/sections/PhoneModel";
import ProcessorSection from "./examples/Apple/sections/ProcessorSection";
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
      <ProcessorSection />
      <BatterySection />
    </>
  );
}

export default App;
