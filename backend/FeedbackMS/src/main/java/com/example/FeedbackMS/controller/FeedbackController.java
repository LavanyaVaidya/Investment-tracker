package com.example.FeedbackMS.controller;

import com.example.FeedbackMS.repository.FeedbackRepository;
import com.example.FeedbackMS.model.feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/feedback")
public class FeedbackController {

    private final FeedbackRepository feedbackRepository;

    @Autowired
    public FeedbackController(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @PostMapping
    public feedback postFeedback(@RequestBody feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    @GetMapping
    public List<feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }
}

