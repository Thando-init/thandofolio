import type { PortfolioProject } from '../types/project';

export const projects: PortfolioProject[] = [
  {
    id: 'salon-booking',
    title: 'Salon Booking and Payment Automation',
    repositoryUrl: 'https://github.com/Thando-init/appointment-ops-platform',
    category: 'Systems Integration / Workflow Automation',
    status: 'Built Workflow Prototype',
    summary:
      'I built a local appointment-operations prototype that connects a static booking form to a Spring Boot API, PostgreSQL and ActiveMQ, with n8n coordinating owner notifications, approval and calendar scheduling. I manually exercised the email and Google Calendar steps locally; the payment flow is a simulation, and the project is not publicly deployed.',
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
        heading: 'Verified architecture',
        body:
          'The project combines a Java 21 booking service built with Spring Boot 3.4.5 and Maven, PostgreSQL 16 persistence with Flyway 10.20.1 migrations, ActiveMQ Artemis messaging, a static HTML/CSS/JavaScript interface, and an n8n workflow. The API owns availability rules and booking state; n8n coordinates external actions.',
      },
      {
        heading: 'Workflow and integration boundary',
        body:
          'The API validates and stores the booking. The JMS path sends booking.created events to a Java consumer; during my local demo, I sent the intake webhook directly because JMS-to-n8n forwarding was not configured. The workflow retrieves the authoritative booking, sends an owner email, and handles approval through the API. Approval returns a demo payment link. The simulated payment callback updates booking state, after which n8n created a Google Calendar event and saved its event ID through the API.',
      },
      {
        heading: 'Challenges and what I learned',
        body:
          'n8n test webhooks only listen after an execution is started, and a malformed Respond to Webhook body caused a failed run. I also had to reconnect the Google Calendar credential. Because an earlier node can update payment state before a later calendar step fails, I learned to inspect each node and verify the API state before retrying instead of assuming the whole workflow rolled back.',
      },
      {
        heading: 'Prototype boundary',
        body:
          'The email and Google Calendar steps were exercised locally using credentials configured in n8n; credentials are not included in the repository. Payment is a simulation: it does not charge a customer or verify a real payment-provider callback. The system is a local prototype, not a public production service.',
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
