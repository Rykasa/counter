import { useState } from 'react';
import { bindActionCreators } from 'redux';
import * as C from './App.styles';
import { Counter } from './components/Counter';
import { Modal } from './components/Modal';
import { useAppStore } from './hooks/useAppStore';
import { actionCreators } from './store';
import { CounterType } from './types';

export function App() {
  const { state, dispatch } = useAppStore();
  const [specificCounter, setSpecificCounter] = useState<CounterType | undefined>(
    {} as CounterType,
  );
  const { openModal } = bindActionCreators(actionCreators, dispatch);

  function getSingleCounter(counter: CounterType) {
    setSpecificCounter(counter);
  }

  function handleCreateCounter() {
    setSpecificCounter(undefined);
    openModal();
  }

  return (
    <C.Container isModalOpen={state.isModalOpen}>
      <C.Heading>Keep Track of Your Day</C.Heading>
      <C.Subheading>Count Everything you want</C.Subheading>
      <C.Section>
        <C.SectionCenter>
          <C.SectionHeader>
            <C.HeaderText>All counters</C.HeaderText>
            <C.CounterAmount>{state.counters.length}</C.CounterAmount>
          </C.SectionHeader>
          <C.Main>
            <C.CounterContainer>
              {state.counters.map((counter) => {
                return (
                  <Counter key={counter.id} getSingleCounter={getSingleCounter} counter={counter} />
                );
              })}
            </C.CounterContainer>
            <C.AddCounterButton onClick={handleCreateCounter}>New counter</C.AddCounterButton>
          </C.Main>
        </C.SectionCenter>
        {state.isModalOpen && <Modal counter={specificCounter} />}
      </C.Section>
    </C.Container>
  );
}
