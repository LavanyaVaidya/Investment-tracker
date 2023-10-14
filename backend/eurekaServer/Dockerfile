FROM openjdk:17-oracle
EXPOSE 8761
ADD target/eurekaServer.jar eurekaServer.jar
ENTRYPOINT ["java", "-jar", "/eurekaServer.jar"]