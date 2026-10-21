import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from '../components/Hero';

describe('Hero', () => {
  it('renders the supplied portrait with meaningful alt text instead of a placeholder', () => {
    render(<Hero />);

    expect(
      screen.getByRole('img', { name: 'Portrait of Thando Majola wearing a dark blazer and glasses.' }),
    ).toHaveAttribute('src', '/images/thando-majola.webp');
    expect(screen.queryByText(/portrait placeholder/i)).not.toBeInTheDocument();
  });
});
