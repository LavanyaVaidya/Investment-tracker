package com.example.QuestionsMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class QuestionsMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuestionsMsApplication.class, args);
	}

}
