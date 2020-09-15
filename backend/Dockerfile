FROM openjdk

RUN mkdir -p /app/backend

COPY /target/apirest-0.0.1-SNAPSHOT.jar /app/backend

EXPOSE 8080

ENTRYPOINT [ "java", "-jar", "/app/backend/apirest-0.0.1-SNAPSHOT.jar" ]

