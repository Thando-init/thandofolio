import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

describe('ProjectCard', () => {
  it('renders the salon workflow and keeps the case study collapsed until requested', () => {
    const salonProject = projects.find((project) => project.id === 'salon-booking');
    expect(salonProject).toBeDefined();

    render(<ProjectCard project={salonProject!} index="01" />);

    expect(screen.getByRole('heading', { name: 'Salon Booking and Payment Automation' })).toBeInTheDocument();
    expect(screen.getByText('Built Workflow Prototype')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Salon Booking and Payment Automation source repository on GitHub/ })).toHaveAttribute(
      'href',
      'https://github.com/Thando-init/appointment-ops-platform',
    );
    expect(screen.getByText('Java 21')).toBeInTheDocument();
    expect(screen.getByText('Spring Boot 3.4.5')).toBeInTheDocument();
    expect(screen.getByText('Booking Form')).toBeInTheDocument();
    expect(screen.queryByText('Prototype boundary')).not.toBeVisible();

    fireEvent.click(screen.getByText('Read case study'));
    expect(screen.getByText('Prototype boundary')).toBeVisible();
    expect(screen.getByText('Google Calendar Booking')).toBeVisible();
  });

  it('shows the supplied public repository on the matching project card', () => {
    const influencerIntel = projects.find((project) => project.id === 'influencer-intel');
    expect(influencerIntel).toBeDefined();

    render(<ProjectCard project={influencerIntel!} index="02" />);

    expect(screen.getByRole('link', { name: /View Influencer Intel source repository on GitHub/ })).toHaveAttribute(
      'href',
      'https://github.com/Thando-init/Influencer-Intel-Dashboard',
    );
    expect(screen.getByText('Altair')).toBeInTheDocument();
    expect(screen.getByText('FastAPI')).toBeInTheDocument();
    expect(screen.queryByText('Plotly')).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument();
  });

  it('does not render missing repository or demo links', () => {
    const safeRide = projects.find((project) => project.id === 'saferide');
    expect(safeRide).toBeDefined();

    render(<ProjectCard project={safeRide!} index="03" />);

    expect(screen.getAllByText('5th Place — Lovable Startup Week')).toHaveLength(2);
    expect(screen.queryByRole('link', { name: /repository/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument();
  });
});
