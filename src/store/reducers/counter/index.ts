import { ActionType, Action } from '../../types';
import { CounterType, State } from '../../../types';

const initialState: State = {
  counters: [] as CounterType[],
  isModalOpen: false,
  total: 0,
};

let tempCounter: CounterType[];

export const counterReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case ActionType.INCREASE_AMOUNT:
      tempCounter = state.counters.map((counter: CounterType) => {
        if (counter.id === action.payload) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }

        return counter;
      });
      return {
        ...state,
        counters: tempCounter,
      };
    case ActionType.DECREASE_AMOUNT:
      tempCounter = state.counters.map((counter: CounterType) => {
        if (counter.id === action.payload) {
          return {
            ...counter,
            value: counter.value - 1,
          };
        }

        return counter;
      });
      return {
        ...state,
        counters: tempCounter,
      };
    case ActionType.RESET_AMOUNT:
      tempCounter = state.counters.map((counter: CounterType) => {
        if (counter.id === action.payload) {
          return {
            ...counter,
            value: 0,
          };
        }

        return counter;
      });
      return {
        ...state,
        counters: tempCounter,
      };
    case ActionType.CREATE_COUNTER:
      return {
        ...state,
        counters: [...state.counters, action.payload],
      };
    case ActionType.DELETE_COUNTER:
      tempCounter = state.counters.filter((counter: CounterType) => counter.id !== action.payload);
      return {
        ...state,
        counters: tempCounter,
      };
    case ActionType.UPDATE_COUNTER:
      tempCounter = state.counters.map((counter: CounterType) => {
        if (counter.id === action.payload.id) {
          return {
            ...counter,
            title: action.payload.title,
            value: action.payload.value,
          };
        }

        return counter;
      });
      return {
        ...state,
        counters: tempCounter,
      };
    default:
      return state;
  }
};
