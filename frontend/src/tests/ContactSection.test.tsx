import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactSection } from '../components/ContactSection';

describe('ContactSection', () => {
  it('renders the supplied contact details as direct links without a form', () => {
    render(<ContactSection />);

    expect(screen.getByRole('link', { name: /Email thandomaajola@gmail.com/i })).toHaveAttribute(
      'href',
      'mailto:thandomaajola@gmail.com',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/thando-majola97',
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/Thando-init',
    );
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute(
      'href',
      'https://canva.link/w8pdfvv3botpvll',
    );
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    expect(screen.queryByText(/to be added/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/This site does not collect or store form submissions/i)).not.toBeInTheDocument();
  });
});
