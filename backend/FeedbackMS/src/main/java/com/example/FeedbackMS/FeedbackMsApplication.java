package com.example.FeedbackMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FeedbackMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(FeedbackMsApplication.class, args);
	}

}
