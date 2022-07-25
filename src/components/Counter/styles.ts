import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: violet;
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  font-size: 1.25rem;

  @media (min-width: 750px) {
    font-size: 1.5rem;
  }
`;

export const CounterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const DecreaseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  svg {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const Amount = styled.span`
  font-size: 2.5rem;
  border-inline: 0.1rem solid red;
  padding: 0 4rem;
`;

export const IncreaseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  svg {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;
