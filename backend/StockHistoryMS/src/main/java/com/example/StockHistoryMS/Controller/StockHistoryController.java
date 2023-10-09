package com.example.StockHistoryMS.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:*")
@RequestMapping("/stockHistory")
public class StockHistoryController {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public StockHistoryController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping
    public List<Object> getAllStockHistory() {
        List<Object> stockHistoryList = mongoTemplate.findAll(Object.class, "stockHistory");
        return stockHistoryList;
    }
}

