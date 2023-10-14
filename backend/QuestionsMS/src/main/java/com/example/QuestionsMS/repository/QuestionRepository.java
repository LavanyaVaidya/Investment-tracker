package com.example.QuestionsMS.repository;

import com.example.QuestionsMS.model.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {
}

