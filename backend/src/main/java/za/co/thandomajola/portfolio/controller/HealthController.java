package za.co.thandomajola.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import za.co.thandomajola.portfolio.HealthResponse;

/**
 * Exposes the minimal HTTP health check used to verify that the portfolio API is available.
 *
 * <p>The endpoint does not expose internal process details or sensitive configuration.</p>
 */
@RestController
@RequestMapping("/api/health")
public class HealthController {

    /**
     * Returns a small success payload for local checks and container readiness.
     *
     * @return a response whose status is {@code ok} when the API can answer requests
     */
    @GetMapping
    public HealthResponse health() {
        return new HealthResponse("ok");
    }
}
