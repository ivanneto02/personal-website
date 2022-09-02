import { render, screen } from '@testing-library/react';
import MiniPosts from './MiniPosts';

test('renders learn react link', () => {
  render(<MiniPosts />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
