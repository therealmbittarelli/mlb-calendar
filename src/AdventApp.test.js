import { render, screen } from '@testing-library/react';
import AdventApp from './AdventApp';

test('renders learn react link', () => {
  render(<AdventApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
