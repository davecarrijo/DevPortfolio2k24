import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5px 3rem 5px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 30px;
`;

const List = styled.ul`
  display: flex;
  color: black;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #4e6fda;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src='./img/LogoDave.png' />
          <List>
            <ListItem>HOME</ListItem>
            <ListItem>WORKS</ListItem>
            <ListItem>CONTACT</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src='./img/search.png' />
          <a
            href='https://wa.me/+351930548674 '
            target='_blank'
            rel='Personal Whatzap'
          >
            <Button>Hire Now</Button>
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
