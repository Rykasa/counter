import * as C from './styles';
import { Plus, Minus } from 'phosphor-react';

export function Counter() {
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
