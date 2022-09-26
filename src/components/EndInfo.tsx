import styled from "styled-components";
import { useState } from "react";

type EndInfoProps = {
  resetGame: () => void;
};

const EndInfo = ({ resetGame }: EndInfoProps) => {
  const [isFinished, setIsFinished] = useState(false);
  const gameEndSFX = new Audio("/audio/game-end.wav");
  return (
    <EndGameContainer>
      {isFinished ? (
        <p>Thanks for playing!</p>
      ) : (
        <>
          <h2>Well done!</h2>
          <p>You found all of the matching cards.</p>
          <p>Would you like to play again?</p>
          <EndGameButtonContainer>
            <EndGameButtonYes onClick={resetGame}>Yes</EndGameButtonYes>
            <EndGameButtonNo
              onClick={() => {
                gameEndSFX.play();
                setIsFinished(true);
              }}
            >
              No
            </EndGameButtonNo>
          </EndGameButtonContainer>
        </>
      )}
    </EndGameContainer>
  );
};

const EndGameContainer = styled.section`
  margin-top: auto;
  text-align: center;
  font-size: 1.3rem;
`;

const EndGameButtonContainer = styled.div`
  width: 70%;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const EndGameButtonYes = styled.button`
  width: 65%;
  border-radius: 1rem;
  border: none;
  font-size: 1.5rem;
  padding-block: 0.5rem;
  cursor: pointer;
  background-color: var(--violet-blue-crayola);
  color: var(--off-white);
  text-transform: uppercase;
  box-shadow: var(--oxford-blue-light) 0px 1px 2px;
`;
const EndGameButtonNo = styled.button`
  width: 35%;
  border-radius: 1rem;
  border: 1px solid var(--oxford-blue);
  background-color: var(--off-white);
  font-size: 1.2rem;
  padding-block: 0.5rem;
  cursor: pointer;
  text-transform: lowercase;
  box-shadow: var(--oxford-blue-light) 0px 1px 2px;
`;

export default EndInfo;
