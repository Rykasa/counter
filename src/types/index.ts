export interface CounterType {
  id: string;
  title: string;
  value: number;
}

export interface State {
  counters: CounterType[];
  isModalOpen: boolean;
  total: number;
}
