import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

describe('ProjectCard', () => {
  it('renders the support-triage case study with the verified stack and human-review workflow', () => {
    const triageProject = projects.find((project) => project.id === 'grounded-ai-support-triage');
    expect(triageProject).toBeDefined();

    render(<ProjectCard project={triageProject!} index="01" />);

    expect(screen.getByRole('heading', { name: 'Grounded AI Support Triage' })).toBeInTheDocument();
    expect(screen.getByText('Working Local Prototype')).toBeInTheDocument();
    expect(screen.getByText('n8n (self-hosted)')).toBeInTheDocument();
    expect(screen.getByText('Supabase · pgvector')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Read case study'));
    expect(screen.getByText('Slack Queue for Human Review')).toBeVisible();
    expect(screen.getByText(/does not send replies to customers/i)).toBeVisible();
    expect(screen.getByRole('group', { name: 'Grounded AI Support Triage workflow' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Demo screenshots' })).toBeVisible();
    expect(screen.getByAltText(/n8n canvas showing the support form and webhook intake/i)).toHaveAttribute(
      'src',
      '/images/support-triage/01-triage-workflow.png',
    );
    expect(screen.getByAltText(/Notion support knowledge-base index/i)).toBeInTheDocument();
    expect(screen.getByText(/no customer reply is sent automatically/i)).toBeVisible();
  });

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
    expect(screen.queryByText('What is still a prototype')).not.toBeVisible();

    fireEvent.click(screen.getByText('Read case study'));
    expect(screen.getByText('What is still a prototype')).toBeVisible();
    expect(screen.getByText('Calendar Event + Saved ID')).toBeVisible();
  });

  it('renders the labelled screenshot gallery when the salon case study is expanded', () => {
    const salonProject = projects.find((project) => project.id === 'salon-booking');
    expect(salonProject).toBeDefined();

    render(<ProjectCard project={salonProject!} index="01" />);
    fireEvent.click(screen.getByText('Read case study'));

    expect(screen.getByRole('heading', { name: 'Demo screenshots' })).toBeVisible();
    expect(screen.getByAltText('Salon booking page with service cards and a list of available appointment times.')).toHaveAttribute(
      'src',
      '/images/appointment-ops/01-booking-service-and-available-slots.png',
    );
    expect(screen.getByText('The simulated confirmation continues to the Google Calendar step.')).toBeVisible();
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

  it('renders the SafeRide live demo and keeps its unavailable repository link hidden', () => {
    const safeRide = projects.find((project) => project.id === 'saferide');
    expect(safeRide).toBeDefined();

    render(<ProjectCard project={safeRide!} index="03" />);

    expect(screen.getAllByText('5th Place — Lovable Startup Week')).toHaveLength(2);
    expect(screen.queryByRole('link', { name: /repository/i })).not.toBeInTheDocument();

    const demoLink = screen.getByRole('link', { name: /live demo/i });
    expect(demoLink).toHaveAttribute('href', 'https://safe-ride-sa.lovable.app');
    expect(demoLink).toHaveAttribute('target', '_blank');
    expect(demoLink).toHaveAttribute('rel', 'noreferrer');
  });
});
