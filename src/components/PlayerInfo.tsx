import styled from "styled-components";

type PlayerInfoProps = {
  turns: number;
  score: number;
};

const PlayerInfo = ({ turns, score }: PlayerInfoProps) => {
  return (
    <Wrapper>
      <p>
        {`Turns: `}
        <strong>{`${turns}`}</strong>
      </p>
      <p>
        {`Pairs found: `}
        <strong>{`${score}`}</strong>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: auto;
  font-size: 1.5rem;
`;

export default PlayerInfo;
