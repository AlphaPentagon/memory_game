import { CardObj } from "./Game";

type EndInfoProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setTurns: React.Dispatch<React.SetStateAction<number>>;
  setSelectedCards: React.Dispatch<React.SetStateAction<CardObj[]>>;
};

const EndInfo = ({ setScore, setTurns, setSelectedCards }: EndInfoProps) => {
  return (
    <div>
      <h2>Well done!</h2>
      <p>You found all of the matching cards.</p>
      <p>Would you like to play again?</p>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default EndInfo;
