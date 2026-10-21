import type { PortfolioProject } from '../types/project';

export const projects: PortfolioProject[] = [
  {
    id: 'influencer-intel',
    title: 'Influencer Intel',
    repositoryUrl: 'https://github.com/Thando-init/Influencer-Intel-Dashboard',
    category: 'Data Analytics / Creator Intelligence',
    status: 'Work in Progress — Undergoing an Upgrade',
    summary:
      "Influencer Intel is a data-driven dashboard for exploring YouTube creator performance and turning channel metrics into useful insights. I'm upgrading the project beyond its original dashboard format, with a focus on making it more automated, scalable, and useful for ongoing creator intelligence.",
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
        heading: 'Verified implementation',
        body:
          'The current public repository contains a Python Streamlit dashboard using Pandas for data handling and Altair for charts, plus a separate FastAPI backend with Pydantic request validation and a YouTube Data API integration. These technologies are confirmed in the current source and dependency files; they do not by themselves confirm a live backend deployment or the specific changes in progress.',
      },
      {
        heading: 'Upgrade status',
        body:
          'The project is marked as undergoing an upgrade. The precise changes currently in progress have not been confirmed here, so this case study does not claim that a particular feature has shipped.',
      },
      {
        heading: 'Demo access',
        body:
          'The supplied Streamlit URL currently redirects anonymous visitors to Streamlit authentication instead of the dashboard and may show an inactivity/wake screen. It is therefore not presented as a public live demo. A shareable updated deployment link can be added when it is available.',
      },
      {
        heading: 'Longer-term direction',
        body:
          'An evolving CreatorOps concept could bring creator intelligence and campaign operations together. Scheduled ingestion, historical tracking, alerts, AI-assisted insights, API integrations and campaign workflows are exploratory ideas, not current features.',
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
      "I built an automated booking workflow for a small salon, connecting customer enquiries, owner approval, payment, and calendar scheduling into one coordinated process. The prototype pairs a static HTML/CSS/JavaScript interface with a Java 21/Spring Boot API, PostgreSQL, ActiveMQ Artemis and an exported n8n workflow; its payment page is a simulation, and live third-party credentials or deployment have not been confirmed.",
    technologies: [
      { name: 'Java 21', status: 'used' },
      { name: 'Spring Boot 3.4.5', status: 'used' },
      { name: 'Maven', status: 'used' },
      { name: 'PostgreSQL 16', status: 'used' },
      { name: 'Flyway 10.20.1', status: 'used' },
      { name: 'ActiveMQ Artemis', status: 'used' },
      { name: 'n8n workflow export', status: 'used' },
      { name: 'HTML · CSS · JavaScript', status: 'used' },
      { name: 'Webhooks', status: 'used' },
      { name: 'Google Calendar workflow node', status: 'used' },
    ],
    caseStudy: [
      {
        heading: 'Verified architecture',
        body:
          'The public repository contains a Java 21 booking service built with Spring Boot 3.4.5 and Maven, PostgreSQL 16 persistence with Flyway 10.20.1 migrations, ActiveMQ Artemis messaging, and a static HTML/CSS/JavaScript browser interface. It also includes an exported n8n workflow. The browser interface is not built with React or another client-side framework.',
      },
      {
        heading: 'Workflow and integration boundary',
        body:
          "A potential client submits a request through the mock salon website. The API models availability and booking; the n8n workflow export shows webhook-triggered owner notification and an approval or rejection step. If approved, the workflow moves to a payment-link step; the browser demo simulates payment confirmation, after which a Google Calendar booking step is represented in the workflow. The payment flow is not connected to a live processor. Email and Google Calendar nodes reference credentials that are not included, so the repository does not establish that those external services are configured or running.",
      },
      {
        heading: 'Prototype boundary',
        body:
          'The repository describes deployment as future work. Source files demonstrate the prototype architecture, not production use, live transactions, configured email/calendar services, or measured business outcomes.',
      },
    ],
    workflowSteps: [
      'Booking Form',
      'Owner Notification',
      'Owner Approval',
      'Payment Link',
      'Payment Confirmation',
      'Google Calendar Booking',
    ],
  },
  {
    id: 'saferide',
    title: 'SafeRide',
    category: 'Product Development / Travel Safety',
    status: 'Hackathon MVP',
    summary:
      'SafeRide is a South African travel-safety platform concept developed as a rapid MVP during a one-day Lovable hackathon in Cape Town. The project explored how technology could make practical travel-safety information more accessible.',
    technologies: [{ name: 'Lovable', status: 'used' }],
    achievement: '5th Place — Lovable Startup Week',
    caseStudy: [
      {
        heading: 'The problem and concept',
        body:
          'The concept explored how practical travel-safety information could be made easier to access in a South African context. SafeRide is presented as an MVP exploration, not as a launched product or a source of verified safety outcomes.',
      },
      {
        heading: 'Contribution and learning',
        body:
          'The confirmed contribution is building the rapid MVP with Lovable during a one-day hackathon. The brief does not specify individual feature ownership, so no unsupported role details are added. The project demonstrates rapid prototyping, product thinking and working within a short time constraint.',
      },
      {
        heading: 'Technology scope',
        body:
          'Lovable is the only confirmed build tool. No additional language, framework, database or backend stack is claimed because no publicly accessible source repository was available to verify one.',
      },
    ],
  },
];
