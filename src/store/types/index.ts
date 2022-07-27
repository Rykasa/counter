import { CounterType } from '../../types';

export enum ActionType {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
  RESET_AMOUNT = 'RESET_AMOUNT',
  CREATE_COUNTER = 'CREATE_COUNTER',
  DELETE_COUNTER = 'DELETE_COUNTER',
  UPDATE_COUNTER = 'UPDATE_COUNTER',
}

interface OpenModal {
  type: ActionType.OPEN_MODAL;
}

interface CloseModal {
  type: ActionType.CLOSE_MODAL;
}

interface IncreaseAmount {
  type: ActionType.INCREASE_AMOUNT;
  payload: string;
}

interface DecreaseAmount {
  type: ActionType.DECREASE_AMOUNT;
  payload: string;
}

interface ResetAmount {
  type: ActionType.RESET_AMOUNT;
  payload: string;
}

interface CreateCounter {
  type: ActionType.CREATE_COUNTER;
  payload: CounterType;
}

interface DeleteCounter {
  type: ActionType.DELETE_COUNTER;
  payload: string;
}

interface UpdateCounter {
  type: ActionType.UPDATE_COUNTER;
  payload: CounterType;
}

export type Action =
  | OpenModal
  | CloseModal
  | IncreaseAmount
  | DecreaseAmount
  | ResetAmount
  | CreateCounter
  | DeleteCounter
  | UpdateCounter;
