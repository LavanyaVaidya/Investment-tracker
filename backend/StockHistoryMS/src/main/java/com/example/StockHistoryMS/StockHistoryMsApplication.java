package com.example.StockHistoryMS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class StockHistoryMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockHistoryMsApplication.class, args);
	}

}
