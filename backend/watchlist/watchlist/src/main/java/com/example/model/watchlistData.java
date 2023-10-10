package com.example.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "watchlistData")
public class watchlistData {
    @Id
    private String id;
    private String symbol;
    private String price;
    private String volume;
    private String exchange;
    private String sector;
    public  watchlistData(){

    }
    public watchlistData(String id, String symbol, String price, String volume, String exchange, String category) {
        this.id = id;
        this.symbol = symbol;
        this.price = price;
        this.volume = volume;
        this.exchange = exchange;
        this.sector = category;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }

    public String getExchange() {
        return exchange;
    }

    public void setExchange(String exchange) {
        this.exchange = exchange;
    }

    public String getCategory() {
        return sector;
    }

    public void setCategory(String category) {
        this.sector = category;
    }
}
