# Project stack verification

I checked the user-supplied public repositories on 18 October 2026 and recorded additional local Salon workflow test results on 20 October 2026. I use this page to separate repository evidence from my own local test evidence. These checks do not prove that a service is publicly deployed or that every repository component was implemented by one contributor.

## Influencer Intel

I reviewed the current Influencer Intel repository. I confirmed that its Streamlit dashboard in `app.py` uses Python, Pandas, and Altair. I also confirmed a separate FastAPI service with Pydantic request validation and a YouTube Data API client. I therefore list Python, Streamlit, Pandas, Altair, FastAPI, Pydantic, and YouTube Data API as technologies used in the project. The repository README mentions Plotly, NumPy, `Home.py`, and Docker, but I could not confirm those from the current manifests and source tree; the implementation I reviewed uses Altair and `app.py` instead. [1] [2] [3] [4] [5] [6]

I checked the supplied Streamlit URL as an anonymous visitor. It redirected me to Streamlit authentication and could also show an inactivity/wake page, so I do not present it as a public demo. I can add an updated public deployment link when I have one. [7]

## Salon Booking and Payment Automation

I inspected the public repository and confirmed a Java 21 service using Spring Boot 3.4.5 and Maven, PostgreSQL 16 with Flyway migrations, and ActiveMQ Artemis. The booking and owner pages use plain HTML, CSS, and JavaScript. I also confirmed an exported n8n workflow with webhook, email, and Google Calendar steps. The repository does not contain the external credential values. [8] [9] [10]

I exercised the email and calendar portions of the workflow locally: the owner email was sent, a Google Calendar event was created, and the event ID was recorded through the API. In the local configuration I tested, JMS-to-n8n forwarding was disabled, so I sent the intake test webhook directly. I also confirmed that the payment page is a simulation: it does not charge money or verify a real payment-provider callback. These tests demonstrate local prototype behavior, not a public production service. [11] [12]

## SafeRide

I can confirm Lovable as the technology named in the original project brief. The supplied GitHub URL `https://github.com/Thando-init/safe-ride-finder` returned an unauthenticated 404 when I checked it, and I could not find that exact repository name in the public repository listing. A public 404 cannot distinguish a deleted or missing repository from a private or otherwise unavailable one. I do not claim any additional stack or display the repository link until I can verify a corrected public URL. [13] [14]

## References

[1]: https://github.com/Thando-init/Influencer-Intel-Dashboard/blob/main/app.py "Influencer Intel Streamlit dashboard source"
[2]: https://raw.githubusercontent.com/Thando-init/Influencer-Intel-Dashboard/main/requirements.txt "Influencer Intel root Python requirements"
[3]: https://raw.githubusercontent.com/Thando-init/Influencer-Intel-Dashboard/main/backend/requirements.txt "Influencer Intel backend Python requirements"
[4]: https://github.com/Thando-init/Influencer-Intel-Dashboard/blob/main/backend/app/main.py "Influencer Intel FastAPI application"
[5]: https://github.com/Thando-init/Influencer-Intel-Dashboard/blob/main/backend/src/youtube/client.py "Influencer Intel YouTube API client"
[6]: https://api.github.com/repos/Thando-init/Influencer-Intel-Dashboard/git/trees/main?recursive=true "Influencer Intel current repository file tree"
[7]: https://influencer-intel-dashboard711.streamlit.app/ "User-supplied Influencer Intel Streamlit deployment"
[8]: https://github.com/Thando-init/appointment-ops-platform/blob/main/services/booking-service/pom.xml "Salon booking Maven and Spring Boot dependencies"
[9]: https://github.com/Thando-init/appointment-ops-platform/blob/main/apps/booking-form/app.js "Salon booking browser application"
[10]: https://github.com/Thando-init/appointment-ops-platform/blob/main/workflows/n8n/booking-intake.json "Salon booking exported n8n workflow"
[11]: https://github.com/Thando-init/appointment-ops-platform/blob/main/apps/booking-form/demo-payment.js "Salon booking simulated payment flow"
[12]: https://github.com/Thando-init/appointment-ops-platform/blob/main/README.md "Salon booking repository scope and deployment status"
[13]: https://api.github.com/repos/Thando-init/safe-ride-finder "SafeRide exact repository endpoint checked for public access"
[14]: https://api.github.com/users/Thando-init/repos?per_page=100&type=owner&sort=full_name "Thando-init public repository listing"
