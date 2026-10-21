FROM eclipse-temurin:21-jdk AS build
WORKDIR /workspace
COPY backend/ ./
RUN chmod +x mvnw && ./mvnw --batch-mode -DskipTests package

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /workspace/target/portfolio-api-1.0.0.jar /app/app.jar
ENV PORT=3000
EXPOSE 3000
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
