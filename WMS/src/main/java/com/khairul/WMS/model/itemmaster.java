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
}