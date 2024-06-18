import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;

  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100vh;
  display: flex;
  margin-bottom: 400px;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatIDo = styled.div`
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
`;
const Desc2 = styled.p`
  font-size: 24px;
  color: lightgray;
  margin-bottom: 400px;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #4e6fda;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Container_2 = styled.div`
  height: 30%;
  scroll-snap-align: center;
  /* width: 1400px; */
  display: flex;
  margin-bottom: 4rem;
  margin-top: 3rem;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 80%;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatIDo>
            <Line src='/img/line.png' />
            <Subtitle>My persona</Subtitle>
          </WhatIDo>
          <Desc>
            I approach my work with unwavering discipline, unwavering
            dedication, and boundless passion. Discipline guides me through the
            rare days when passion falters, allowing me to consistently deliver
            my best work. When I'm passionate about a project, I harness that
            energy to produce top-tier results. I thrive on adaptability, relish
            problem-solving, and excel in collaborative environments, always
            striving to provide optimal solutions and elevate team performance.
            <Desc2>
              <WhatIDo>
                <Line src='/img/line.png' />
                <Subtitle> Tech Stack ;</Subtitle>
              </WhatIDo>
              <Container_2>
                <Img src='/img/TechStack/react.png'></Img>
                <Img src='/img/TechStack/nodejs.png'></Img>
                <Img src='/img/TechStack/typescript.png'></Img>
                <Img src='/img/TechStack/python.png'></Img>
                <Img src='/img/TechStack/postgresql.png'></Img>
              </Container_2>
              <Container_2>
                <Img src='/img/TechStack/icons8-vite-48.png'></Img>
                <Img src='/img/TechStack/icons8-sass-480.png'></Img>
                <Img src='/img/TechStack/icons8-nginx-480.png'></Img>
                <Img src='/img/TechStack/icons8-bun-64.png'></Img>
                <Img src='/img/TechStack/icons8-html-100.png'></Img>
              </Container_2>
            </Desc2>
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
