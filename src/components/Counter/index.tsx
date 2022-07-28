import * as C from './styles';
import { Plus, Minus } from 'phosphor-react';
import { CounterType } from '../../types';

interface CounterProps {
  getSingleCounter: (counter: CounterType) => void;
}

export function Counter({ getSingleCounter }: CounterProps) {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Times I drank coffeedrank coffee</C.Title>
      </C.Header>
      <C.CounterWrapper>
        <C.DecreaseButton>
          <Minus />
        </C.DecreaseButton>
        <C.Amount>4</C.Amount>
        <C.IncreaseButton>
          <Plus />
        </C.IncreaseButton>
      </C.CounterWrapper>
    </C.Container>
  );
}
