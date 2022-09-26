import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <img src="/images/sword_01.png" alt="sword" width="50px" height="50px" />
      <Heading>Fantasy Memory Game</Heading>
      <img
        src="/images/wooden_shield.png"
        alt="sword"
        width="50px"
        height="50px"
      />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const Heading = styled.h1`
  color: var(--violet-blue-crayola);
  font-size: min(8vw, 3rem);
  padding-inline: 2rem;
`;

export default Header;
