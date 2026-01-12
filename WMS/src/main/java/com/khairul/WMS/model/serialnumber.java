package com.khairul.WMS.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "serial_numbers")
public class serialnumber {

    @Id
    private String serialnumber;
    private String item;
    private LocalDate date;
    private String control_number;
    private String locationId;
    private String lot;
    private String user;
    private String itemstatus; // Damaged or Good

    public serialnumber() {}

    // Getters and Setters
    public String getSerialnumber() { return serialnumber; }
    public void setSerialnumber(String serialnumber) { this.serialnumber = serialnumber; }

    public String getItem() { return item; }
    public void setItem(String item) { this.item = item; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public String getControl_number() { return control_number; }
    public void setControl_number(String control_number) { this.control_number = control_number; }

    public String getLocationId() { return locationId; }
    public void setLocationId(String locationId) { this.locationId = locationId; }

    public String getLot() { return lot; }
    public void setLot(String lot) { this.lot = lot; }

    public String getuser() { return user; }
    public void setuser(String user) { this.user = user; }

    public String getItemstatus() { return itemstatus; }
    public void setItemstatus(String itemstatus) { this.itemstatus = itemstatus; }
}