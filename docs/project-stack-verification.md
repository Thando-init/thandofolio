# Project stack verification

Checked against the user-supplied public repositories on 18 October 2026. These findings describe files in the repositories; they do not prove that a service is deployed, its external credentials are configured, or every component was personally implemented by one contributor.

## Influencer Intel

The repository uses Python. Its Streamlit dashboard in `app.py` imports Streamlit, Pandas and Altair. The project has a separate FastAPI service with Pydantic request validation, and its backend includes a YouTube Data API client. The current technology list therefore shows Python, Streamlit, Pandas, Altair, FastAPI, Pydantic and YouTube Data API. The repository README mentions Plotly, NumPy, `Home.py` and Docker, but those are not supported by the current manifests and source tree; the checked implementation uses Altair and `app.py` instead. [1] [2] [3] [4] [5] [6]

The user-supplied Streamlit URL redirected an anonymous visitor to Streamlit authentication during the check and could also show an inactivity/wake page. It is not exposed on the portfolio as a public demo link. Add the updated public deployment URL when Thando shares it. [7]

## Salon Booking and Payment Automation

The public repository contains a Java 21 service using Spring Boot 3.4.5 and Maven, PostgreSQL 16 with Flyway migrations, and ActiveMQ Artemis. The booking and owner browser pages use plain HTML, CSS and JavaScript; they are not a React application. An exported n8n workflow contains webhook, email and Google Calendar nodes. Its email/calendar nodes reference external credentials, but the repository does not include those credential values or prove that an n8n instance is running. [8] [9] [10]

The payment-link endpoint and browser payment page implement a local simulation, not a live payment provider. The repository describes deployment as future work, so the case study does not claim production use, successful live transactions, configured email/calendar integrations or measured results. [11] [12]

## SafeRide

Lovable is the only technology confirmed by the original project brief. The supplied GitHub URL `https://github.com/Thando-init/safe-ride-finder` returned an unauthenticated 404, and the public repository listing did not contain that exact repository name. A public 404 cannot distinguish a deleted/missing project from a private or otherwise unavailable repository; no additional stack is claimed and the link is not displayed. [13] [14]

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
