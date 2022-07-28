import { faker } from '@faker-js/faker';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '.';
import { render } from '../../utils/testUtils';

const getSingleCounter = jest.fn();
describe('<Counter />', () => {
  it('should render counter with props', () => {
    const fakeCounter = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      value: faker.datatype.number(),
    };

    render(<Counter getSingleCounter={getSingleCounter} counter={fakeCounter} />);

    expect(screen.getByText(fakeCounter.title)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /minus/i })).toBeInTheDocument();
    expect(screen.getByText(fakeCounter.value)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /plus/i })).toBeInTheDocument();
  });

  it('should increase counter value', async () => {
    const fakeCounter = {
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      value: 0,
    };

    render(<Counter getSingleCounter={getSingleCounter} counter={fakeCounter} />);

    const counterEl = screen.getByTestId('counter');

    expect(counterEl).toHaveTextContent('0');

    await userEvent.click(screen.getByRole('button', { name: /plus/i }));

    expect(screen.getByTestId('counter')).toHaveTextContent('1');
  });
});
