package com.khairul.WMS.model;

import jakarta.persistence.*;

@Entity
@Table(name = "locations")
public class location {
    @Id
    private String locationId;
    private String lot;
    private String type;

    public location() {}

    // Getters and Setters
    public String getLocationId() { return locationId; }
    public void setLocationId(String locationId) { this.locationId = locationId; }
    public String getLot() { return lot; }
    public void setLot(String lot) { this.lot = lot; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
}