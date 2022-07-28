import * as C from './styles';
import { Plus, Minus } from 'phosphor-react';
import { CounterType } from '../../types';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store';
import { useAppStore } from '../../hooks/useAppStore';

interface CounterProps {
  getSingleCounter: (counter: CounterType) => void;
  counter: CounterType;
}

export function Counter({ getSingleCounter, counter }: CounterProps) {
  const { dispatch } = useAppStore();
  const { increaseAmount, openModal, decreaseAmount } = bindActionCreators(
    actionCreators,
    dispatch,
  );

  function handleIncreaseValue() {
    increaseAmount(counter.id);
  }

  function handleDecreaseValue() {
    decreaseAmount(counter.id);
  }

  function handleEditCounter() {
    getSingleCounter(counter);
    openModal();
  }

  return (
    <C.Container>
      <C.Header>
        <C.Title onClick={handleEditCounter}>{counter.title}</C.Title>
      </C.Header>
      <C.CounterWrapper>
        <C.DecreaseButton aria-label='minus' onClick={handleDecreaseValue}>
          <Minus />
        </C.DecreaseButton>
        <C.Amount data-testid='counter'>{counter.value}</C.Amount>
        <C.IncreaseButton aria-label='plus' onClick={handleIncreaseValue}>
          <Plus />
        </C.IncreaseButton>
      </C.CounterWrapper>
    </C.Container>
  );
}
