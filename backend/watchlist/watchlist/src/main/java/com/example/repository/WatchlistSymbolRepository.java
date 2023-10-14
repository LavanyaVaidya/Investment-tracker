package com.example.repository;

import com.example.model.watchlistSymbol;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WatchlistSymbolRepository extends MongoRepository<watchlistSymbol, String> {
    void deleteBySymbol(String symbol);
}
