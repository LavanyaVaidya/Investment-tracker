package com.example.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "portfolioData")
public class portfolioData {
    @Id

    private  String id;
    private  String symbol;
    private  String investedPrice;
    private  String quantity;

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getInvestedPrice() {
        return investedPrice;
    }

    public void setInvestedPrice(String investedPrice) {
        this.investedPrice = investedPrice;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
