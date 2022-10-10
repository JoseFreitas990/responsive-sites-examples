import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);
`;

const moveUp = keyframes`
 100%{
   transform:translateY(0)
   
   }
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  position: relative;
  height: var(--fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${(props) => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .author {
    text-align: end;
    width: 100%;
    background-image: linear-gradient(-180deg, var(--gradient));
  }
`;

const Quote = () => {
  return (
    <Section>
      <TextContainer>
        <Text delay='0s'>
          <span>&#8220; You can't connect the dots looking foward;</span>
        </Text>
        <Text delay='0.4s'>
          <span>
            &nbsp;&nbsp;&nbsp;you can only connect them looking backward
          </span>
        </Text>
        <Text delay='0.8s'>
          <span>&nbsp;&nbsp;&nbsp;so you have to trust that the dots</span>
        </Text>
        <Text delay='1.2s'>
          <span>
            &nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8220;
          </span>
        </Text>
        <Text delay='1.6s'>
          <span className='author'>&#x23AF; Steve Jobs</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quote;
