import { faker } from '@faker-js/faker';
import { counterReducer } from '.';
import { createRandomCounters } from '../../../helpers/testHelper';
import { State } from '../../../types';
import { Action, ActionType } from '../../types';

it('should return initial state', () => {
  const initialState = {
    counters: [],
    isModalOpen: false,
    total: 0,
  };
  let payload: any;
  const type = Object.create(ActionType);

  expect(counterReducer(undefined, { type, payload })).toEqual(initialState);
});

it('should handle OPEN_MODAL', () => {
  const type = ActionType.OPEN_MODAL;

  const initialState: State = {
    counters: [],
    isModalOpen: false,
    total: 0,
  };

  const action: Action = {
    type,
  };

  const reducerReturnValue = counterReducer(initialState, action);

  expect(reducerReturnValue.isModalOpen).toEqual(true);
});

it('should handle CLOSE_MODAL', () => {
  const type = ActionType.CLOSE_MODAL;

  const initialState: State = {
    counters: [],
    isModalOpen: true,
    total: 0,
  };

  const action: Action = {
    type,
  };

  const reducerReturnValue = counterReducer(initialState, action);

  expect(reducerReturnValue.isModalOpen).toEqual(false);
});

it('should handle INCREASE_AMOUNT', () => {
  const type = ActionType.INCREASE_AMOUNT;

  const randomCounters = createRandomCounters();
  const randomCounterId = randomCounters[faker.datatype.number(randomCounters.length)].id;
  const randomCounter = randomCounters.filter((counter) => counter.id === randomCounterId);

  const initialState: State = {
    counters: randomCounters,
    isModalOpen: false,
    total: 0,
  };

  const payload = randomCounterId;

  const action: Action = {
    type,
    payload,
  };

  const reducerReturnValue = counterReducer(initialState, action);
  const changedCounter = reducerReturnValue.counters.find(
    (counter) => counter.id === randomCounterId,
  );

  expect(changedCounter?.value).toBe(randomCounter[0].value + 1);
});

it('should handle DECREASE_AMOUNT', () => {
  const type = ActionType.DECREASE_AMOUNT;

  const randomCounters = createRandomCounters();
  const randomCounterId = randomCounters[faker.datatype.number(randomCounters.length)].id;
  const randomCounter = randomCounters.filter((counter) => counter.id === randomCounterId)[0];

  const initialState: State = {
    counters: randomCounters,
    isModalOpen: false,
    total: 0,
  };

  const payload = randomCounterId;

  const action: Action = {
    type,
    payload,
  };

  const reducerReturnValue = counterReducer(initialState, action);
  const changedCounter = reducerReturnValue.counters.find(
    (counter) => counter.id === randomCounterId,
  );

  expect(changedCounter?.value).toBe(randomCounter.value - 1);
});

it('should handle RESET_AMOUNT', () => {
  const type = ActionType.RESET_AMOUNT;

  const randomCounters = createRandomCounters();
  const randomCounterId = randomCounters[faker.datatype.number(randomCounters.length)].id;

  const initialState: State = {
    counters: randomCounters,
    isModalOpen: false,
    total: 0,
  };

  const payload = randomCounterId;

  const action: Action = {
    type,
    payload,
  };

  const reducerReturnValue = counterReducer(initialState, action);
  const changedCounter = reducerReturnValue.counters.find(
    (counter) => counter.id === randomCounterId,
  );

  expect(changedCounter?.value).toBe(0);
});

it('should handle CREATE_COUNTER', () => {
  const type = ActionType.CREATE_COUNTER;

  const randomCounters = createRandomCounters();

  const initialState: State = {
    counters: randomCounters,
    isModalOpen: false,
    total: 0,
  };

  const payload = {
    id: faker.datatype.uuid(),
    title: faker.datatype.string(),
    value: 0,
  };

  const action: Action = {
    type,
    payload,
  };

  const reducerReturnValue = counterReducer(initialState, action);
  const hasCounterBeenAdded = reducerReturnValue.counters.some(
    (counter) => counter.id === payload.id,
  );

  expect(hasCounterBeenAdded).toBe(true);
});

it('should handle DELETE_COUNTER', () => {
  const type = ActionType.DELETE_COUNTER;

  const randomCounters = createRandomCounters();
  const randomCounterId = randomCounters[faker.datatype.number(randomCounters.length)].id;

  const initialState: State = {
    counters: randomCounters,
    isModalOpen: false,
    total: 0,
  };

  const payload = randomCounterId;

  const action: Action = {
    type,
    payload,
  };

  const reducerReturnValue = counterReducer(initialState, action);
  const hasCounter = reducerReturnValue.counters.some((counter) => counter.id === randomCounterId);

  expect(hasCounter).toBe(false);
});

it('should handle UPDATE_COUNTER', () => {
  const type = ActionType.UPDATE_COUNTER;

  const randomCounters = createRandomCounters();
  const randomCounterId = randomCounters[faker.datatype.number(randomCounters.length)].id;

  const initialState: State = {
    counters: randomCounters,
    isModalOpen: false,
    total: 0,
  };

  const payload = {
    id: randomCounterId,
    title: faker.datatype.string(),
    value: faker.datatype.number(),
  };

  const action: Action = {
    type,
    payload,
  };

  const reducerReturnValue = counterReducer(initialState, action);
  const updatedCounter = reducerReturnValue.counters.find(
    (counter) => counter.id === randomCounterId,
  );

  expect(updatedCounter).toEqual(payload);
});
