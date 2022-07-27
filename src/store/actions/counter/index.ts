import { ActionType } from '../../types';
import { CounterType } from '../../../types';

export function openModal(): {
  type: string;
} {
  return {
    type: ActionType.OPEN_MODAL,
  };
}
export function closeModal(): {
  type: string;
} {
  return {
    type: ActionType.CLOSE_MODAL,
  };
}

export function increaseAmount(id: string): {
  type: string;
  payload: string;
} {
  return {
    type: ActionType.INCREASE_AMOUNT,
    payload: id,
  };
}

export function decreaseAmount(id: string): {
  type: string;
  payload: string;
} {
  return {
    type: ActionType.DECREASE_AMOUNT,
    payload: id,
  };
}

export function resetAmount(id: string): {
  type: string;
  payload: string;
} {
  return {
    type: ActionType.RESET_AMOUNT,
    payload: id,
  };
}

export function createCounter(counter: CounterType): {
  type: string;
  payload: CounterType;
} {
  return {
    type: ActionType.CREATE_COUNTER,
    payload: counter,
  };
}

export function deleteCounter(id: string): {
  type: string;
  payload: string;
} {
  return {
    type: ActionType.DELETE_COUNTER,
    payload: id,
  };
}

export function updateCounter(counter: CounterType): {
  type: string;
  payload: CounterType;
} {
  return {
    type: ActionType.UPDATE_COUNTER,
    payload: counter,
  };
}
