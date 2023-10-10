package com.example.repository;

import com.example.model.portfolioPrice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PortfolioPriceRepository extends MongoRepository<portfolioPrice, String> {

}
