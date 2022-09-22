import styled from "styled-components";

type EndInfoProps = {
  resetGame: () => void;
};

const EndInfo = ({ resetGame }: EndInfoProps) => {
  return (
    <EndGameContainer>
      <h2>Well done!</h2>
      <p>You found all of the matching cards.</p>
      <p>Would you like to play again?</p>
      <EndGameButtonContainer>
        <EndGameButton onClick={resetGame}>Yes</EndGameButton>
        <EndGameButton>No</EndGameButton>
      </EndGameButtonContainer>
    </EndGameContainer>
  );
};

const EndGameContainer = styled.section`
  margin-top: auto;
  text-align: center;
`;

const EndGameButtonContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const EndGameButton = styled.button`
  width: 80%;
  border-radius: 1rem;
  border: none;
  font-size: 1.5rem;
  padding-block: 0.5rem;
  cursor: pointer;
`;

export default EndInfo;
