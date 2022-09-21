import styled from "styled-components";
import { CardObj } from "./CardGrid";

type CardProps = {
  flippedImage: string;

  card: CardObj;
  cardIndex: number;
  handleClick: (cardIndex: number, card: CardObj) => void;
};

const Card = ({
  flippedImage,
  handleClick,

  card,
  cardIndex,
}: CardProps): JSX.Element => {
  return (
    <CardContainer
      onClick={() => {
        handleClick(cardIndex, card);
      }}
    >
      {card.flipped || card.found ? (
        <CardFlippedImage src={flippedImage} alt="Alt text" />
      ) : (
        <CardImage src="/images/card_back.png" alt="Alt text" />
      )}
    </CardContainer>
  );
};

// styled components
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
