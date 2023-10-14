FROM openjdk:17-oracle
EXPOSE 8090
ADD target/watchlist.jar watchlist.jar
ENTRYPOINT ["java", "-jar", "/watchlist.jar"]