import { useState } from 'react';
import * as C from './App.styles';
import { Counter } from './components/Counter';
import { Modal } from './components/Modal';
import { useAppStore } from './hooks/useAppStore';
import { CounterType } from './types';

export function App() {
  const { state } = useAppStore();
  const [specificCounter, setSpecificCounter] = useState<CounterType>({} as CounterType);

  function getSingleCounter(counter: CounterType) {
    setSpecificCounter(counter);
  }

  return (
    <C.Container isModalOpen={state.isModalOpen}>
      <C.Heading>Keep Track of Your Day</C.Heading>
      <C.Subheading>Count Everything you want</C.Subheading>
      <C.Section>
        <C.SectionCenter>
          <C.SectionHeader>
            <C.HeaderText>All counters</C.HeaderText>
            <C.CounterAmount>2</C.CounterAmount>
          </C.SectionHeader>
          <C.Main>
            <C.CounterContainer>
              <Counter getSingleCounter={getSingleCounter} />
            </C.CounterContainer>
            <C.AddCounterButton>New counter</C.AddCounterButton>
          </C.Main>
        </C.SectionCenter>
        {state.isModalOpen && <Modal counter={specificCounter} />}
      </C.Section>
    </C.Container>
  );
}
