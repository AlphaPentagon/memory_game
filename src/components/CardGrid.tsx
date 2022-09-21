import cards from "../libs/cards";
import Card from "./Card";
import styled from "styled-components";
import { useEffect, useState } from "react";

export interface CardObj {
  id: number;
  name: string;
  image: string;
  flipped: boolean;
  found: boolean;
}

const CardGrid = (): JSX.Element => {
  const [randomCards, setRandomCards] = useState<CardObj[] | null>(null);
  const [score, setScore] = useState<number>(0);
  const [turns, setTurns] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<CardObj[]>([]);

  // randomly selects a card from the cardsArr, adds it to the randomOrderArr and then removes it from the original array, so that we end up with an array of cards in a random order
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
      console.log(randomOrderArr);
    }
    return randomOrderArr;
  };

  if (!randomCards) {
    const newState = randomiseCards();
    setRandomCards(newState);
  }
  useEffect(() => {
    if (score === 8) {
      alert("You found all the cards!");
      setScore(0);
      setTurns(0);
      setSelectedCards([]);
      const newState = randomiseCards();
      setRandomCards(newState);
    }
  }, [score]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (randomCards) {
        setTurns(turns + 1);
        console.log("Selected Cards: ", selectedCards);
        let newState: CardObj[] = [];
        if (selectedCards[0].name === selectedCards[1].name) {
          setScore(score + 1);
          newState = randomCards.map((card) => {
            if (card.name === selectedCards[0].name) {
              return { ...card, found: true, flipped: false };
            }
            return card;
          });
        } else {
          newState = randomCards.map((card) => {
            if (
              card.name === selectedCards[0].name ||
              card.name === selectedCards[1].name
            ) {
              return { ...card, flipped: false };
            }
            return card;
          });
        }
        setTimeout(() => {
          setRandomCards(newState);
          setSelectedCards([]);
        }, 2000);
      }
    }
  }, [selectedCards]);

  const handleClick = (cardIndex: number, card: CardObj) => {
    if (selectedCards.length < 2) {
      setFlippedStatus(cardIndex);
      updateSelectedCards(card);
    } else {
      console.log("2 cards already selected");
    }
  };

  const setFlippedStatus = (cardIndex: number) => {
    if (randomCards) {
      if (
        randomCards[cardIndex].flipped === true ||
        randomCards[cardIndex].found === true
      ) {
        return;
      }
      console.log(randomCards[cardIndex]);
      const newState = randomCards.map((card, index) => {
        if (index === cardIndex) {
          return { ...card, flipped: true };
        }
        return card;
      });
      setRandomCards(newState);
    }
  };

  const updateSelectedCards = (card: CardObj) => {
    if (card.flipped === true) {
      console.log("Card already flipped.  Choose a different card");
      return;
    }
    if (card.found === true) {
      console.log("Card already found.  Choose a different card");
      return;
    }
    setSelectedCards([...selectedCards, card]);
  };

  return (
    <>
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
      <div>
        <p>{`Turns: ${turns}`}</p>
      </div>
    </>
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
