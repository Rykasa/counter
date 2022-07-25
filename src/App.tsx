import * as C from './App.styles';
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
      <div>
        <div>
          <form>
            <label htmlFor='title'>Title</label>
            <input name='title' type='text' placeholder='E.g. times I read books' />
            <div>
              <button>Reset</button>
              <button>Delete</button>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    </C.Container>
  );
}
