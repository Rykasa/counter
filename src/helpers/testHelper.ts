import { faker } from '@faker-js/faker';
import { CounterType } from '../types';

export function createRandomCounters() {
  const counters: CounterType[] = [];

  Array.from(Array(10).fill(faker.datatype.uuid())).forEach((id: string) => {
    counters.push({
      id,
      title: faker.datatype.string(),
      value: faker.datatype.number(),
    });
  });

  return counters;
}
