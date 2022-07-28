import { faker } from '@faker-js/faker';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '.';
import { render } from '../../utils/testUtils';

describe('<Modal />', () => {
  it('should find modal content if is opened', () => {
    render(<Modal />);

    expect(screen.getByLabelText(/counter form/i)).toBeInTheDocument();
    expect(screen.getByTestId('close'));
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/E.g. read books/i));
    expect(screen.getByLabelText(/value/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/0/i));
    expect(screen.queryByRole('button', { name: /delete/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /reset/i })).not.toBeInTheDocument();
    expect(screen.getByText(/create/i)).toBeInTheDocument();
  });

  it('should close modal on click', async () => {
    render(<Modal />);

    const modal = screen.getByLabelText('modal');

    await userEvent.click(screen.getByTestId('close'));
    expect(modal).toHaveAttribute('aria-hidden', 'true');
  });

  it('should close modal with esc key', () => {
    const { container } = render(<Modal />);

    const modal = screen.getByLabelText('modal');

    fireEvent.keyUp(container, { key: 'Escape' });
    expect(modal).toHaveAttribute('aria-hidden', 'true');
  });

  it('should fill and submit the form', () => {
    render(<Modal />);

    const fakeCounter = {
      title: faker.datatype.string(),
      value: faker.datatype.number(),
    };

    const modal = screen.getByLabelText('modal');

    userEvent.type(screen.getByPlaceholderText(/E.g. read books/i), fakeCounter.title);
    userEvent.type(screen.getByPlaceholderText(/0/i), fakeCounter.value.toString());
    userEvent.click(screen.getByText(/create/i));

    expect(modal).toHaveAttribute('aria-hidden', 'true');
  });

  it('should return error is field incorrects', async () => {
    render(<Modal />);

    expect(screen.getByPlaceholderText(/E.g. read books/i)).toHaveValue('');
    expect(screen.getByPlaceholderText(/0/i)).toHaveValue(null);

    await userEvent.click(screen.getByText(/create/i));

    expect(screen.getByText(/invalid fields/i)).toBeInTheDocument();
  });

  it('should render edit view', () => {
    const fakeCounter = {
      id: faker.datatype.uuid(),
      title: faker.datatype.string(),
      value: faker.datatype.number(),
    };

    render(<Modal counter={fakeCounter} />);

    expect(screen.getByPlaceholderText(/E.g. read books/i)).toHaveValue(fakeCounter.title);
    expect(screen.getByPlaceholderText(/0/i)).toHaveValue(fakeCounter.value);

    expect(screen.getByText(/delete/i)).toBeInTheDocument();
    expect(screen.getByText(/reset/i)).toBeInTheDocument();
    expect(screen.queryByText(/create/i)).not.toBeInTheDocument();
  });
});
