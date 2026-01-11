package com.khairul.WMS.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "item_master")
public class itemmaster {
    @Id
    private String itemCode;
    private String itemName;
    private String description;
    private String status;
    private LocalDate expiration;
    private String type;
    private int unitprice;
    private int weight;
    private int height;
    private int length;

    public itemmaster() {}

    // Getters and Setters
    public String getItemCode() { return itemCode; }
    public void setItemCode(String itemCode) { this.itemCode = itemCode; }

    public String getItemName() { return itemName; }
    public void setItemName(String itemName) { this.itemName = itemName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDate getExpiration() { return expiration; }
    public void setExpiration(LocalDate expiration) { this.expiration = expiration; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public int getUnitprice() { return unitprice; }
    public void setUnitprice(int unitprice) { this.unitprice = unitprice; }

    public int getWeight() { return weight; }
    public void setWeight(int weight) { this.weight = weight; }

    public int getHeight() { return height; }
    public void setHeight(int height) { this.height = height; }

    public int getLength() { return length; }
    public void setLength(int length) { this.length = length; }
}