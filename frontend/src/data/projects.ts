import type { PortfolioProject } from '../types/project';

export const projects: PortfolioProject[] = [
  {
    id: 'grounded-ai-support-triage',
    title: 'Grounded AI Support Triage',
    category: 'AI Automation / Systems Integration',
    status: 'Working Local Prototype',
    summary:
      'I built and tested a self-hosted n8n support-triage prototype that accepts demo tickets through a form or webhook, classifies and routes them, retrieves relevant Notion guidance from Supabase pgvector, and posts a cited draft to the appropriate Slack review channel. It never sends a customer reply automatically.',
    technologies: [
      { name: 'n8n (self-hosted)', status: 'used' },
      { name: 'Google Gemini', status: 'used' },
      { name: 'Supabase · pgvector', status: 'used' },
      { name: 'Notion', status: 'used' },
      { name: 'Slack', status: 'used' },
      { name: 'Docker Compose', status: 'used' },
      { name: 'Webhooks and forms', status: 'used' },
    ],
    caseStudy: [
      {
        heading: 'The workflow I built',
        body:
          'A customer-style intake form or test webhook sends a ticket into self-hosted n8n. Gemini returns structured triage fields, then deterministic workflow rules set the final priority and review path. The workflow retrieves related Notion guide chunks from Supabase pgvector, drafts a response grounded in that context, and posts the ticket, source page ID, and suggested reply to a Slack review channel.',
      },
      {
        heading: 'Human review and security controls',
        body:
          'The workflow does not send replies to customers. Suggested replies are posted for a human to review. Reports of possible account takeover are flagged as security concerns and routed to a dedicated security-review channel with immediate escalation guidance. Billing and other tickets route to their relevant review queues.',
      },
      {
        heading: 'Knowledge retrieval and citations',
        body:
          'I created a small Notion support knowledge base, synced its guide content through a separate manual n8n workflow, generated Gemini embeddings, and indexed the chunks in Supabase pgvector. Ticket runs retrieve matching guidance and include the source Notion page ID in Slack so a reviewer can trace the draft to its source.',
      },
      {
        heading: 'What I verified and what remains a prototype',
        body:
          'I tested form intake, Billing routing, and security escalation end to end, including retrieval of the relevant guide and a human-review draft. This is a local demonstration, not a live help-desk integration or production service. The knowledge sync is manually run and is not yet idempotent; there is no automatic customer reply, production monitoring, or client deployment.',
      },
    ],
    workflowSteps: [
      'Form or Webhook Intake',
      'Gemini Ticket Classification',
      'Rules-Based Priority and Safety Checks',
      'Supabase pgvector RAG from Notion Guides',
      'Grounded Draft with Source ID',
      'Slack Queue for Human Review',
    ],
    screenshots: [
      {
        src: '/images/support-triage/01-triage-workflow.png',
        alt: 'n8n canvas showing the support form and webhook intake, Gemini classification, Supabase retrieval, draft generation, routing switch, and Slack channel branches.',
        caption: 'The end-to-end n8n workflow connects intake, triage, retrieval, drafting, and Slack review routes.',
      },
      {
        src: '/images/support-triage/02-intake-form.png',
        alt: 'Support intake form with name, email, subject, and message fields, shown with fictional test data.',
        caption: 'A simple customer-style form captures the fields used by the triage workflow.',
      },
      {
        src: '/images/support-triage/03-security-review-in-slack.png',
        alt: 'Slack security-review channel showing a fictional ticket flagged as urgent, security concern true, and human review required.',
        caption: 'A simulated account-security ticket is escalated to a human reviewer; no customer reply is sent automatically.',
      },
      {
        src: '/images/support-triage/04-notion-knowledge-base.png',
        alt: 'Notion support knowledge-base index listing service outage, password reset, and billing guides.',
        caption: 'Notion holds the support guides used as source material for retrieval-augmented drafting.',
      },
      {
        src: '/images/support-triage/05-form-confirmation.png',
        alt: 'Form submission confirmation stating that the support request was submitted for review and warning users not to submit passwords or verification codes.',
        caption: 'After submission, the form confirms receipt and reminds users not to include credentials.',
      },
    ],
  },
  {
    id: 'salon-booking',
    title: 'Salon Booking and Payment Automation',
    repositoryUrl: 'https://github.com/Thando-init/appointment-ops-platform',
    category: 'Systems Integration / Workflow Automation',
    status: 'Built Workflow Prototype',
    summary:
      'I built a local appointment-operations prototype that connects a static booking form to a Spring Boot API, PostgreSQL and ActiveMQ, with n8n coordinating owner notifications, approval and calendar scheduling. I manually exercised the email and Google Calendar steps locally; the payment flow is a simulation, and I have not publicly deployed the project.',
    technologies: [
      { name: 'Java 21', status: 'used' },
      { name: 'Spring Boot 3.4.5', status: 'used' },
      { name: 'Maven', status: 'used' },
      { name: 'PostgreSQL 16', status: 'used' },
      { name: 'Flyway 10.20.1', status: 'used' },
      { name: 'ActiveMQ Artemis', status: 'used' },
      { name: 'n8n and webhooks', status: 'used' },
      { name: 'HTML · CSS · JavaScript', status: 'used' },
      { name: 'Email notifications', status: 'used' },
      { name: 'Google Calendar API', status: 'used' },
    ],
    caseStudy: [
      {
        heading: 'Architecture I built',
        body:
          'I built the prototype with a Java 21 booking service using Spring Boot 3.4.5 and Maven, PostgreSQL 16 persistence with Flyway 10.20.1 migrations, ActiveMQ Artemis messaging, a static HTML/CSS/JavaScript interface, and an n8n workflow. I use the API as the source of truth for availability and booking state, while n8n coordinates external actions.',
      },
      {
        heading: 'How I integrated the workflow',
        body:
          'The API validates and stores each booking. The JMS path sends booking.created events to a Java consumer; during my local demo, I sent the intake webhook directly because JMS-to-n8n forwarding was not configured. My workflow retrieves the authoritative booking, sends an owner email, and handles approval through the API. Approval returns a demo payment link. The simulated payment callback updates booking state, after which n8n created a Google Calendar event and saved its event ID through the API.',
      },
      {
        heading: 'Challenges and what I learned',
        body:
          'I learned that n8n test webhooks only listen after I start an execution, and a malformed Respond to Webhook body can fail a run. I also had to reconnect the Google Calendar credential. Because an earlier node can update payment state before a later calendar step fails, I now inspect each node and verify API state before retrying instead of assuming the whole workflow rolled back.',
      },
      {
        heading: 'What is still a prototype',
        body:
          'I configured the email and Google Calendar credentials in my local n8n instance; I do not include those credentials in the repository. My payment step is a simulation: it does not charge a customer or verify a real payment-provider callback. I have not launched this as a public production service.',
      },
    ],
    workflowSteps: [
      'Booking Form',
      'API + Booking Event',
      'n8n Owner Email',
      'Owner Approval',
      'Simulated Payment',
      'Calendar Event + Saved ID',
    ],
    screenshots: [
      {
        src: '/images/appointment-ops/01-booking-service-and-available-slots.png',
        alt: 'Salon booking page with service cards and a list of available appointment times.',
        caption: 'Choose a service and an available appointment slot.',
      },
      {
        src: '/images/appointment-ops/02-booking-request-details.png',
        alt: 'Booking form showing the selected service, appointment time, contact fields, and notes.',
        caption: 'Enter booking details and preferences before submitting the request.',
      },
      {
        src: '/images/appointment-ops/03-booking-request-confirmed.png',
        alt: 'Booking form confirmation that the request was received for studio review.',
        caption: 'The booking form confirms the request was received for review.',
      },
      {
        src: '/images/appointment-ops/04-owner-notification-email.png',
        alt: 'Automated owner email containing a booking summary and a review link.',
        caption: 'n8n sends the owner a booking notification with a review link.',
      },
      {
        src: '/images/appointment-ops/05-n8n-workflow-overview.png',
        alt: 'n8n canvas showing booking intake, owner approval, and demo payment/calendar branches.',
        caption: 'The workflow separates booking intake, owner approval, and payment/calendar steps.',
      },
      {
        src: '/images/appointment-ops/06-owner-review-status.png',
        alt: 'Owner review page showing booking details and the recorded approval state.',
        caption: 'The owner review page presents booking details and approval status.',
      },
      {
        src: '/images/appointment-ops/07-approved-booking-payment-link.png',
        alt: 'Owner review page after approval with a link to the demo payment page.',
        caption: 'An approved request can continue to the demo payment step.',
      },
      {
        src: '/images/appointment-ops/08-demo-payment-pending.png',
        alt: 'Demo payment page showing an approved booking and the not-started payment status.',
        caption: 'The payment screen clearly labels payment as a simulation.',
      },
      {
        src: '/images/appointment-ops/09-demo-payment-confirmed.png',
        alt: 'Demo payment page showing simulated payment confirmed and calendar processing underway.',
        caption: 'The simulated confirmation continues to the Google Calendar step.',
      },
    ],
  },
  {
    id: 'influencer-intel',
    title: 'Influencer Intel',
    repositoryUrl: 'https://github.com/Thando-init/Influencer-Intel-Dashboard',
    category: 'Data Analytics / Creator Intelligence',
    status: 'Work in Progress — Undergoing an Upgrade',
    summary:
      "Influencer Intel is my data-driven dashboard for exploring YouTube creator performance and turning channel metrics into useful insights. I'm upgrading it beyond its original dashboard format, with a focus on making it more automated, scalable, and useful for ongoing creator intelligence.",
    technologies: [
      { name: 'Python', status: 'used' },
      { name: 'Streamlit', status: 'used' },
      { name: 'Pandas', status: 'used' },
      { name: 'Altair', status: 'used' },
      { name: 'FastAPI', status: 'used' },
      { name: 'Pydantic', status: 'used' },
      { name: 'YouTube Data API', status: 'used' },
    ],
    caseStudy: [
      {
        heading: 'What I verified in the repository',
        body:
          'I verified that the current public repository contains a Python Streamlit dashboard using Pandas for data handling and Altair for charts, plus a separate FastAPI backend with Pydantic request validation and a YouTube Data API integration. These source and dependency files confirm the listed technologies, but they do not confirm a live backend deployment or specific upgrade changes.',
      },
      {
        heading: 'Upgrade status',
        body:
          'I am upgrading the project, but I have not confirmed a specific feature as shipped here, so I do not claim one in this case study.',
      },
      {
        heading: 'Demo access',
        body:
          'I opened my Streamlit app while it was asleep and found that it loaded again after waking. It may take a little while to become available on a first visit after inactivity, so visitors should give it time to start before refreshing.',
      },
      {
        heading: 'Where I may take it next',
        body:
          'I want to explore a CreatorOps concept that could bring creator intelligence and campaign operations together. Scheduled ingestion, historical tracking, alerts, AI-assisted insights, API integrations, and campaign workflows are ideas I am exploring, not features I have implemented.',
      },
    ],
  },
  {
    id: 'saferide',
    title: 'SafeRide',
    demoUrl: 'https://safe-ride-sa.lovable.app',
    category: 'Product Development / Travel Safety',
    status: 'Hackathon MVP',
    summary:
      'I developed SafeRide as a South African travel-safety platform concept during a one-day Lovable hackathon in Cape Town. I explored how technology could make practical travel-safety information more accessible.',
    technologies: [{ name: 'Lovable', status: 'used' }],
    achievement: '5th Place — Lovable Startup Week',
    caseStudy: [
      {
        heading: 'The problem I explored',
        body:
          'I explored how practical travel-safety information could be easier to access in a South African context. I present SafeRide as an MVP exploration, not as a launched product or a source of verified safety outcomes.',
      },
      {
        heading: 'My contribution and learning',
        body:
          'I built the rapid MVP with Lovable during a one-day hackathon. The original brief does not establish which individual features I owned, so I avoid attributing specific features to myself. I used the project to practise rapid prototyping, product thinking, and working within a short time constraint.',
      },
      {
        heading: 'Technology I can confirm',
        body:
          'I can confirm Lovable as the build tool. I do not claim an additional language, framework, database, or backend stack because I could not verify one in a publicly accessible source repository.',
      },
    ],
  },
];
