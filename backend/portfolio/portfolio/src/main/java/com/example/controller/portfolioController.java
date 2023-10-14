package com.example.controller;

import com.example.model.PortfolioPriceDocument;
import com.example.model.portfolioData;
import com.example.model.portfolioPrice;
import com.example.model.portfolioTotal;
import com.example.repository.PortfolioDataRepository;
import com.example.repository.PortfolioPriceRepository;
import com.example.repository.PortfolioTotalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/portfolio")
public class portfolioController {
    @Autowired
    private PortfolioTotalRepository portfolioRepository;

    @Autowired
    private PortfolioDataRepository portfolioDataRepository;

    private final MongoTemplate mongoTemplate;

    @Autowired
    public portfolioController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping("/data")
    public ResponseEntity<String> postPortfolioData(@RequestBody portfolioData dataList) {
        try {
            portfolioData savedDataList = portfolioDataRepository.save(dataList);
            return ResponseEntity.ok(  " portfolio data items have been saved.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save portfolio data.");
        }
    }


    @GetMapping("/total")
    public List<portfolioTotal> getAllPortfolio() {
        List<portfolioData> portfolioDataList = portfolioDataRepository.findAll();
        List<PortfolioPriceDocument> portfolioPriceList = mongoTemplate.findAll(PortfolioPriceDocument.class, "portfolioPrice");
        // Array of Object
        // of Array

        Map<String, PortfolioPriceDocument> priceDataMap = new HashMap<>();
        
        Map<String, String> symbolToPriceMap = new HashMap<>();

        // Iterate through the portfolioPriceList
        for (PortfolioPriceDocument entry : portfolioPriceList) {
             List<portfolioPrice>priceData =   entry.getPortfolioPrice();
             for(portfolioPrice item:priceData){
                 String symbol = (String) item.getSymbol();
                String price = (String) item.getPrice();
                symbolToPriceMap.put(symbol, price);
             }
        }

        List<portfolioTotal> matchedPortfolio = new ArrayList<>();

        for (portfolioData data : portfolioDataList) {
            String symbol = data.getSymbol();
            String priceData = symbolToPriceMap.get(symbol); // We have the price

            if (priceData != null) {
                portfolioTotal totalData = new portfolioTotal();
                totalData.setSymbol(symbol);
                totalData.setPrice(priceData);
                totalData.setInvestedPrice(data.getInvestedPrice());
                totalData.setQuantity(data.getQuantity());
                matchedPortfolio.add(totalData);

            }
        }

        return matchedPortfolio;
    }



@DeleteMapping("/data/{symbol}")
public ResponseEntity<String> deletePortfolioDataBySymbol(@PathVariable String symbol) {
    try {
        portfolioDataRepository.deleteBySymbol(symbol);
        return ResponseEntity.ok("Portfolio data with symbol " + symbol + " has been deleted.");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete portfolio data.");
    }
}


}
