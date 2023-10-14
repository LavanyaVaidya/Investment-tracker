package com.example.repository;

import com.example.model.portfolioData;
import com.example.model.portfolioTotal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PortfolioDataRepository extends MongoRepository<portfolioData, String> {
    void deleteBySymbol(String symbol);
}
