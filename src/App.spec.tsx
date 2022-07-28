import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { render } from './utils/testUtils';

describe('<App/>', () => {
  it('should be able to open modal', async () => {
    render(<App />);

    await userEvent.click(screen.getByRole('button', { name: /new counter/i }));

    expect(screen.getByLabelText('modal')).toBeInTheDocument();
  });
});
