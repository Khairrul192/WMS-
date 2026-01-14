package com.khairul.WMS.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String itemCode; 
    private String AltitemCode;
    private int quantity;
    private String locationId;
    private String lot;
    private LocalDate expiration;

    public Item() {}

    // Getters and Setters (Important to remove yellow warnings)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getItemCode() { return itemCode; }
    public void setItemCode(String itemCode) { this.itemCode = itemCode; }

    public String getAltitemCode() { return AltitemCode; }
    public void setAltitemCode(String AltitemCode) { this.AltitemCode = AltitemCode; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public String getLocationId() { return locationId; }
    public void setLocationId(String locationId) { this.locationId = locationId; }

    public String getLot() { return lot; }
    public void setLot(String lot) { this.lot = lot; }
    
    public LocalDate getExpiration() { return expiration; }
    public void setExpiration(LocalDate expiration) { this.expiration = expiration; }
}