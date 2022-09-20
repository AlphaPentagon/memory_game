import styled from "styled-components";
import { useState } from "react";

type CardProps = {
  flippedImage: string;
};

const Card = ({ flippedImage }: CardProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer onClick={handleClick}>
      {isFlipped ? (
        <CardFlippedImage src={flippedImage} alt="Alt text" />
      ) : (
        <CardImage src="/images/card_back.png" alt="Alt text" />
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 2px solid black;
  border-radius: 0.5rem;
  width: min(10vw, 8rem);
  height: min(15vw, 10rem);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  object-fit: cover;
`;

const CardFlippedImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 0.4rem;
`;

export default Card;
