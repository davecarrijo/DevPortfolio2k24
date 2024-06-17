import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: black;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #4e6fda;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Desc2 = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #4e6fda;
  color: white;
  font-weight: 500;
  width: 100px;
  height: 1.9rem;
  padding: 0.4rem;
  margin: 0.3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const section_social = styled.button`
  margin: 80px;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 1rem;
  margin-right: 4px;
`;
const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Front-End React Developer</Title>
          <WhatWeDo>
            <Line src='/img/line.png' />
            <Subtitle>Hi, I'm David Patrik.</Subtitle>
          </WhatWeDo>
          <Desc>A passionate SE Developer based in Lisbon, Portugal.📍</Desc>
          <section_social>
            <a href='https://github.com/davecarrijo' target='_blank'>
              <Button>
                <Logo src='/img/github-logo.png'></Logo>
                Github
              </Button>
            </a>
            <a href='https://github.com/davecarrijo' target='_blank'>
              <Button>
                <Logo src='/img/github-logo.png'></Logo>
                Leetc
              </Button>
            </a>
            <a href='https://www.linkedin.com/in/davidcarrijo/' target='_blank'>
              <Button>
                <Logo src='/img/linkdin_logo.png'></Logo>
                Linkdln
              </Button>
            </a>
            <a
              href='https://drive.google.com/file/d/1envhtsJNZ1HDQIM1jsZPYDEZNHvo4L3J/view'
              target='_blank'
            >
              <Button>
                <Logo src='/img/LogoDave.png'></Logo>
                RC
              </Button>
            </a>

            {/* <a href='https://davecarrijo.github.io/' target='_blank'>
              <Button>IOS-Repo</Button>
            </a> */}
          </section_social>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={3} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.9}>
                <MeshDistortMaterial
                  color='#4e6fda'
                  attach='material'
                  distort={0.7}
                  speed={0.3}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src='/img/me.jpg' />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
