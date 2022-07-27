import {
  closeModal,
  openModal,
  increaseAmount,
  decreaseAmount,
  resetAmount,
  createCounter,
  deleteCounter,
  updateCounter,
} from '.';
import { ActionType } from '../../types';
import { faker } from '@faker-js/faker';

it('should test openModal action', () => {
  const actionReturnValue = openModal();

  expect(actionReturnValue.type).toEqual(ActionType.OPEN_MODAL);
});

it('should test closeModal action', () => {
  const actionReturnValue = closeModal();

  expect(actionReturnValue.type).toEqual(ActionType.CLOSE_MODAL);
});

it('should test increaseAmount action', () => {
  const id = faker.datatype.uuid();

  const actionReturnValue = increaseAmount(id);

  expect(actionReturnValue.type).toEqual(ActionType.INCREASE_AMOUNT);
  expect(actionReturnValue.payload).toEqual(id);
});

it('should test decreaseAmount action', () => {
  const id = faker.datatype.uuid();

  const actionReturnValue = decreaseAmount(id);

  expect(actionReturnValue.type).toEqual(ActionType.DECREASE_AMOUNT);
  expect(actionReturnValue.payload).toEqual(id);
});

it('should test resetAmount action', () => {
  const id = faker.datatype.uuid();

  const actionReturnValue = resetAmount(id);

  expect(actionReturnValue.type).toEqual(ActionType.RESET_AMOUNT);
  expect(actionReturnValue.payload).toEqual(id);
});

it('should test createCounter action', () => {
  const counter = {
    id: faker.datatype.uuid(),
    title: faker.datatype.string(),
    value: faker.datatype.number(),
  };

  const actionReturnValue = createCounter(counter);

  expect(actionReturnValue.type).toEqual(ActionType.CREATE_COUNTER);
  expect(actionReturnValue.payload).toEqual(counter);
});

it('should test deleteCounter action', () => {
  const id = faker.datatype.uuid();

  const actionReturnValue = deleteCounter(id);

  expect(actionReturnValue.type).toEqual(ActionType.DELETE_COUNTER);
  expect(actionReturnValue.payload).toEqual(id);
});

it('should test updateCounter action', () => {
  const counter = {
    id: faker.datatype.uuid(),
    title: faker.datatype.string(),
    value: faker.datatype.number(),
  };

  const actionReturnValue = updateCounter(counter);

  expect(actionReturnValue.type).toEqual(ActionType.UPDATE_COUNTER);
  expect(actionReturnValue.payload).toEqual(counter);
});
