import styled from "styled-components";
import { CardObj } from "./Game";

type CardProps = {
  flippedImage: string;
  card: CardObj;
  cardIndex: number;
  handleClick: (cardIndex: number, card: CardObj) => void;
};

type CardFlippedImgProps = {
  found?: boolean;
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
      found={card.found ? true : false}
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
const CardContainer = styled.div<CardFlippedImgProps>`
  box-sizing: border-box;
  border: ${(props) =>
    props.found
      ? "4px inset var(--violet-blue-crayola)"
      : "1px inset var(--oxford-blue)"};
  border-radius: 0.5rem;
  width: min(18vw, 7.5rem);
  height: min(22vw, 9.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  box-shadow: var(--oxford-blue) 0px 1px 4px;
  background: var(--off-white);
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
