import { render, screen } from '@testing-library/react';
import App from './App';

test('renders c', () => {
  render(<App />);
  const AppHeaderLogo = screen.getByAltText(/Phrae/i);
  expect(AppHeaderLogo).toBeInTheDocument();
});
