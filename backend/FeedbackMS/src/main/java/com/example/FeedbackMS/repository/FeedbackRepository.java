package com.example.FeedbackMS.repository;

import com.example.FeedbackMS.model.feedback;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepository extends MongoRepository<feedback, String> {
}

