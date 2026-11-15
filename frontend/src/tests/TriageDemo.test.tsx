import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TriageDemo } from '../components/TriageDemo';

describe('TriageDemo', () => {
  it('runs the fictional billing example and shows its route, source, and human-review draft', () => {
    render(<TriageDemo />);

    fireEvent.click(screen.getByRole('button', { name: 'Duplicate billing charge' }));
    fireEvent.click(screen.getByRole('button', { name: /run sample ticket/i }));

    expect(screen.getByText('billing', { exact: true })).toBeInTheDocument();
    expect(screen.getByText('billing_review', { exact: true })).toBeInTheDocument();
    expect(screen.getByText('Billing and Duplicate Charge Guide')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Suggested draft for a human reviewer' })).toBeInTheDocument();
    expect(screen.getByText(/no ticket is sent to a support system/i)).toBeInTheDocument();
  });

  it('routes suspected account takeover to immediate human escalation without drafting a customer reply', () => {
    render(<TriageDemo />);

    fireEvent.click(screen.getByRole('button', { name: 'Suspected account takeover' }));
    fireEvent.click(screen.getByRole('button', { name: /run sample ticket/i }));

    expect(screen.getByText('security_review', { exact: true })).toBeInTheDocument();
    expect(screen.getByText('Immediate escalation')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Security handling' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Suggested draft for a human reviewer' })).not.toBeInTheDocument();
    expect(screen.getByText(/No customer-facing reply is drafted/)).toBeInTheDocument();
  });
});
