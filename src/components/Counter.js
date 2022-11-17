import { useEffect, useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const CountShow = styled.h1`
  font-size: 50px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
`;
export default function Welcome(props) {
  const buttonOptions = ["Start", "Pause"];
  const [count, setCount] = useState(0);
  const [countEnabled, setCountEnabled] = useState(false);
  const [buttonMode, setButtonMode] = useState(0);
  useEffect(() => {
    if (countEnabled) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [count, countEnabled]);
  const ChangeCount = (mode = false) => {
    if (countEnabled || mode) {
      setCountEnabled(false);
      setButtonMode(0);
      if (mode) setCount((prev) => (prev = 0));
    } else {
      setCountEnabled(true);
      setButtonMode(1);
    }
  };
  return (
    <Container>
      <CountShow>{count}</CountShow>
      <ButtonContainer>
        <Button onClick={() => ChangeCount()}>
          {buttonOptions[buttonMode]}
        </Button>
        <Button onClick={() => ChangeCount(true)}>Reset</Button>
      </ButtonContainer>
    </Container>
  );
}
