package com.khairul.WMS.model;

import jakarta.persistence.*;

@Entity
@Table(name = "item_master")
public class itemmaster {
    @Id
    @Column(name = "item_code")
    private String item_code;

    private String AltitemCode;

    @Column(name = "item_name")
    private String item_name;

    private String description;
    private String status;
    private String expiration;
    private String type;
    private int unitprice;
    private int weight;
    private int height;
    private int length;
    private int width;
    private String vendor;

    public itemmaster() {}

    // Getters and Setters
    public String getItem_code() { return item_code; }
    public void setItem_code(String item_code) { this.item_code = item_code; }

    public String getAltitemCode() { return AltitemCode; }
    public void setAltitemCode(String AltitemCode) { this.AltitemCode = AltitemCode; }

    public String getItem_name() { return item_name; }
    public void setItem_name(String item_name) { this.item_name = item_name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getExpiration() { return expiration; }
    public void setExpiration(String expiration) { this.expiration = expiration; }

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

    public int getWidth() { return width; }
    public void setWidth(int width) { this.width = width; }

    public String getVendor() { return vendor; }
    public void setVendor(String vendor) { this.vendor = vendor; }
}