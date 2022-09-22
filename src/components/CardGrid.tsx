import styled from "styled-components";
import Card from "./Card";
import { CardObj } from "./Game";

type CardGridProps = {
  randomCards: CardObj[] | null;
  handleClick: (cardIndex: number, card: CardObj) => void;
};

const CardGrid = ({ randomCards, handleClick }: CardGridProps): JSX.Element => {
  return (
    <Wrapper>
      {randomCards &&
        randomCards.map((card, index) => (
          <Card
            handleClick={handleClick}
            card={card}
            cardIndex={index}
            flippedImage={card.image}
            key={card.id}
          />
        ))}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  /* width: min(45vw, 800px); this appears to be causing an overfill sizing glitch*/
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 0 auto;
`;
export default CardGrid;
