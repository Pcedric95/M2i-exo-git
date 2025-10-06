
FROM maven:3.8-openjdk-17-slim

WORKDIR /app

COPY pom.xml .

# mettre en cache dépendances Maven
RUN mvn dependency:go-offline -B

COPY src ./src

RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/*.jar"]