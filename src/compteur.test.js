import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './compteur';

test('le compteur commence à 0', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/0/i);
  expect(counterElement).toBeInTheDocument();
});

test('le compteurs doit être incrémenté quand le bouton est cliqué', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/+1/i);
  fireEvent.click(buttonElement);
  const counterElement = screen.getByText(/+1/i);
  expect(counterElement).toBeInTheDocument();
});

test('should decrement the counter when the button is clicked', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/-1/i);
  fireEvent.click(buttonElement);
  const counterElement = screen.getByText(/-1/i);
  expect(counterElement).toBeInTheDocument();
});