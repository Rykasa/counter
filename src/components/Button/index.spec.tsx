import { screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { render } from '../../utils/testUtils';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with props', () => {
    const title = faker.lorem.sentence();
    const bgColor = faker.color.rgb();

    render(<Button title={title} bgColor={bgColor} />);

    expect(screen.getByRole('button', { name: title })).toBeInTheDocument();

    const str = 'background-color:' + bgColor;
    expect(screen.getByRole('button', { name: title })).toHaveStyle(str);
  });
});
