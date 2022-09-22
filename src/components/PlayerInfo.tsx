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
  width: 70%;
  margin-top: auto;
`;

export default PlayerInfo;
