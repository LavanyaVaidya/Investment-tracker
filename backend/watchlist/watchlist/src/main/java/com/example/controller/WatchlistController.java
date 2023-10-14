package com.example.controller;

import com.example.model.DataContainer;
import com.example.model.watchlistData;
import com.example.model.watchlistSymbol;
import com.example.repository.WatchlistSymbolRepository;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/watchlist")
public class WatchlistController {
    @Autowired
    private  WatchlistSymbolRepository watchlistSymbolRepository;
    @PostMapping("/symbol")
    public watchlistSymbol postwatchlistSymbol(@RequestBody watchlistSymbol data){
        return watchlistSymbolRepository.save(data);
    }

    @GetMapping("/symbol")
    public List<watchlistSymbol> getwatchlistSymbols(){
        return watchlistSymbolRepository.findAll();

    }


    private final MongoTemplate mongoTemplate;

    @Autowired
    public WatchlistController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }



    @GetMapping("/data")
    public List<watchlistData> getWatchlistData() {
        List<watchlistSymbol> watchlistSymbols = watchlistSymbolRepository.findAll();
        List<DataContainer> watchlistDataList = mongoTemplate.findAll(DataContainer.class, "watchlistData");
        List<watchlistData> listData = null; 
        for (DataContainer entry : watchlistDataList) {
            listData  = entry.getWathclistData();
        }

//
        Set<String> symbolHashSet = new HashSet<>();

        // Use add() method to add elements into the Set
       for(watchlistSymbol item :watchlistSymbols){
          String symbol =  item.getSymbol();
          symbolHashSet.add(symbol);
       }
        // I need to store data in
         List<watchlistData>macthedWatchlist = new ArrayList<>() ;
        for(watchlistData item :listData){
            String sym = item.getSymbol();
            if (symbolHashSet.contains(sym)) {
                macthedWatchlist.add(item);
            }
        }
        return macthedWatchlist;

    }



    @DeleteMapping("/data/{symbol}")
    public ResponseEntity<String> deletePortfolioDataBySymbol(@PathVariable String symbol) {
        try {
            watchlistSymbolRepository.deleteBySymbol(symbol);
            return ResponseEntity.ok("Portfolio data with symbol " + symbol + " has been deleted.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete portfolio data.");
        }
    }







}
