import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <h1>Memory Game</h1>
      <p>Find all of the matching cards</p>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  margin: 0 auto;
  text-align: center;
`;

export default Header;
