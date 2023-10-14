package com.example.repository;

import com.example.model.portfolioTotal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PortfolioTotalRepository extends MongoRepository<portfolioTotal, String> {

}
