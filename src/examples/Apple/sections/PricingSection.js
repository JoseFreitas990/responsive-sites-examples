import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model3 from "../components/Scene3";
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
  overflow: hidden;
`;

const Phone = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  cursor: grab;
`;

const PricingSection = () => {
  return (
    <Section>
      <Phone>
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight position={0.4} />
          <Suspense>
            <Model3 />
          </Suspense>

          <Environment preset='night' />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Phone>
    </Section>
  );
};

export default PricingSection;
