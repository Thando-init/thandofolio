package za.co.thandomajola.portfolio;

/**
 * Public response returned by the lightweight application health endpoint.
 *
 * @param status a short indication that the API process is responding
 */
public record HealthResponse(String status) {
}
