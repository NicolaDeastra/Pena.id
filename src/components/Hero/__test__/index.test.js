import { render } from '@testing-library/react';
import Hero from '..';

test('Hero render correctly', () => {
  const { container } = render(<Hero />);
  expect(container).toMatchSnapshot();
});
