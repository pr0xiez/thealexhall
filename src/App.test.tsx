import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero', () => {
  render(<App />);
  const linkElement = screen.getByText('Front-end Developer, User Advocate, Sports Enthusiast');
  expect(linkElement).toBeInTheDocument();
});
