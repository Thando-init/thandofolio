import { useState } from 'react';

type ScenarioId = 'billing' | 'password-reset' | 'security';

interface Scenario {
  id: ScenarioId;
  label: string;
  subject: string;
  message: string;
  category: string;
  priority: string;
  queue: string;
  source: string;
  reply?: string;
  escalation?: string;
}

const scenarios: Scenario[] = [
  {
    id: 'billing',
    label: 'Duplicate billing charge',
    subject: 'I think I was charged twice.',
    message: 'I can see two charges for my subscription. Could someone check?',
    category: 'billing',
    priority: 'normal',
    queue: 'billing_review',
    source: 'Billing and Duplicate Charge Guide',
    reply: 'I’m sorry about the duplicate-charge concern. Please share the charge dates and amounts, and an invoice number if available. A billing agent can compare the records. Please do not send a full card number or security code.',
  },
  {
    id: 'password-reset',
    label: 'Password-reset issue',
    subject: 'My password reset email did not arrive.',
    message: 'I requested a reset email and checked my spam folder, but I still cannot find it.',
    category: 'account_access',
    priority: 'normal',
    queue: 'standard_review',
    source: 'Password Reset Guide',
    reply: 'Please confirm that you used the email address linked to your account and check for email filters. If the reset email still does not arrive, a human support agent can investigate delivery. Do not share your password or reset link.',
  },
  {
    id: 'security',
    label: 'Suspected account takeover',
    subject: 'I saw a login I do not recognize.',
    message: 'There is a sign-in on my account that I did not make.',
    category: 'account_access',
    priority: 'urgent',
    queue: 'security_review',
    source: 'Password Reset Guide — Security Escalation',
    escalation: 'Escalate immediately to a human security reviewer. Do not treat this as a routine reset, request passwords or authentication codes, or promise that the account is secure.',
  },
];

/** Runs only fixed fictional examples in the browser; no ticket data is submitted or sent to services. */
export function TriageDemo() {
  const [selectedId, setSelectedId] = useState<ScenarioId | ''>('');
  const [resultId, setResultId] = useState<ScenarioId | ''>('');
  const selected = scenarios.find((scenario) => scenario.id === selectedId);
  const result = scenarios.find((scenario) => scenario.id === resultId);

  function chooseScenario(id: ScenarioId) {
    setSelectedId(id);
    setResultId('');
  }

  return (
    <section className="triage-demo" id="try-a-ticket" aria-labelledby="triage-demo-title">
      <div className="triage-demo__heading">
        <p className="eyebrow">Try a sample ticket</p>
        <h4 id="triage-demo-title">See what the workflow surfaces.</h4>
        <p>Choose one of the fictional examples, then run it to reveal the preset result.</p>
      </div>

      <div className="triage-demo__choices" role="group" aria-label="Choose a fictional sample ticket">
        {scenarios.map((scenario) => (
          <button
            aria-pressed={selectedId === scenario.id}
            className="triage-demo__choice"
            key={scenario.id}
            onClick={() => chooseScenario(scenario.id)}
            type="button"
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <div className="triage-demo__actions">
        <button className="button button--primary" disabled={!selected} onClick={() => setResultId(selectedId)} type="button">
          Run sample ticket <span aria-hidden="true">→</span>
        </button>
        <span>Preset example · no ticket is sent to a support system</span>
      </div>

      <p className="triage-demo__safety">
        Fictional examples only. Do not enter real customer details. This demo does not call n8n, Gemini, Supabase, Notion, or Slack, and it never sends a customer reply.
      </p>

      {result ? (
        <div className="triage-demo__result" aria-live="polite" aria-labelledby="triage-result-title">
          <div className="triage-demo__result-header">
            <div>
              <p className="eyebrow">Preset demo output</p>
              <h5 id="triage-result-title">{result.subject}</h5>
            </div>
            <span className={result.id === 'security' ? 'triage-demo__status triage-demo__status--urgent' : 'triage-demo__status'}>
              {result.id === 'security' ? 'Immediate escalation' : 'Human review required'}
            </span>
          </div>
          <dl className="triage-demo__fields">
            <div><dt>Category</dt><dd>{result.category}</dd></div>
            <div><dt>Priority</dt><dd>{result.priority}</dd></div>
            <div><dt>Queue</dt><dd>{result.queue}</dd></div>
            <div><dt>Knowledge source</dt><dd>{result.source}</dd></div>
          </dl>
          {result.reply ? (
            <div className="triage-demo__draft">
              <h6>Suggested draft for a human reviewer</h6>
              <p>{result.reply}</p>
            </div>
          ) : (
            <div className="triage-demo__escalation">
              <h6>Security handling</h6>
              <p>{result.escalation}</p>
              <p className="triage-demo__no-reply">No customer-facing reply is drafted for this security sample.</p>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}
