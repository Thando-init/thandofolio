package za.co.thandomajola.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Starts the small REST backend used by the portfolio website.
 *
 * <p>The application currently exposes only a health endpoint. It deliberately has no database
 * or contact form because the portfolio has no real message-delivery service configured.</p>
 */
@SpringBootApplication
public class PortfolioApplication {

    /**
     * Launches the Spring Boot application.
     *
     * @param args command-line arguments passed to Spring Boot
     */
    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
    }
}
