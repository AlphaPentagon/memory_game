import cards from "../libs/cards";
import Card from "./Card";
import styled from "styled-components";
import { useState, useEffect } from "react";

interface CardObj {
  id: number;
  name: string;
  image: string;
  flipped: boolean;
  found: boolean;
}

const CardGrid = (): JSX.Element => {
  const [randomCards, setRandomCards] = useState<CardObj[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardObj[]>([]);

  // randomly selects a card from the cardsArr, adds it to the randomOrderArr and then removes it from the original array, so that we end up with an array of cards in a random order

  useEffect(() => {
    const randomiseCards = () => {
      let randomOrderArr = [];
      let cardsArr = cards;
      for (let i = cardsArr.length; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        randomOrderArr.push(cardsArr[randomIndex]);
        cardsArr = [
          ...cardsArr.slice(0, randomIndex),
          ...cardsArr.slice(randomIndex + 1),
        ];
      }
      setRandomCards(randomOrderArr);
    };
    randomiseCards();
  }, []);

  return (
    <Wrapper>
      {randomCards &&
        randomCards.map((card) => (
          <Card flippedImage={card.image} key={card.id} />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: min(45vw, 800px);
  row-gap: 1rem;
  column-gap: 1rem;
  margin: 0 auto;
`;

export default CardGrid;
