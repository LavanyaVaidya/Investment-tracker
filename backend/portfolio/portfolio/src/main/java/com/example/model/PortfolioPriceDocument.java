package com.example.model;

import org.bson.types.ObjectId;

import java.util.List;

public class PortfolioPriceDocument {

    private List<portfolioPrice> portfolioPrice;

    public List<portfolioPrice> getPortfolioPrice() {
        return portfolioPrice;
    }

    public void setPortfolioPrice(List<portfolioPrice> portfolioPrice) {
        this.portfolioPrice = portfolioPrice;
    }

}