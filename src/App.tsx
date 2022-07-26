import { X } from 'phosphor-react';
import * as C from './App.styles';
import { Button } from './components/Button';
import { Counter } from './components/Counter';

export function App() {
  return (
    <C.Container>
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
              <Counter />
              <Counter />
              <Counter />
              <Counter />
            </C.CounterContainer>
            <C.AddCounterButton>New counter</C.AddCounterButton>
          </C.Main>
        </C.SectionCenter>
      </C.Section>
      <C.Modal>
        <C.ModalCenter>
          <C.Form>
            <C.CloseButton type='button'>
              <X />
            </C.CloseButton>
            <C.Label htmlFor='title'>Title</C.Label>
            <C.Input name='title' type='text' placeholder='E.g. read books' />
            <C.Label htmlFor='amount'>Amount</C.Label>
            <C.Input name='amount' type='number' placeholder='0' />
            <C.ButtonsWrapper>
              <Button type='button' title='Delete' bgColor='#C52b2b' />

              <Button type='button' title='Reset' bgColor='#38A3A5' />
              <Button type='button' title='Create' bgColor='#38A3A5' />
            </C.ButtonsWrapper>
          </C.Form>
        </C.ModalCenter>
      </C.Modal>
    </C.Container>
  );
}
//202040
//80ED99
//57CC99
//C7F9CC
//38A3A5
