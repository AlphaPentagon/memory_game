import CardGrid from "../components/CardGrid";
import styled from "styled-components";

const Home = (): JSX.Element => {
  return (
    <>
      <MainHeader>
        <h1>Memory Game</h1>
        <p>Find all of the matching cards</p>
      </MainHeader>

      <CardGrid />
    </>
  );
};

const MainHeader = styled.header`
  margin: 0 auto;
  text-align: center;
  padding-block: 2rem;
`;

export default Home;
