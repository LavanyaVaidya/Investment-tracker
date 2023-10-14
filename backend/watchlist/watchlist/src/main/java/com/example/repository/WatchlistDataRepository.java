package com.example.repository;

import com.example.model.watchlistData;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WatchlistDataRepository extends MongoRepository<watchlistData, String> {
}
