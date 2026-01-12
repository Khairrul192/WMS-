package com.khairul.WMS.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
//import jakarta.persistence.Id;
import jakarta.persistence.Table;
//import java.time.LocalDate;

@Entity
@Table(name = "Shipment")
public class outbound {
    @Id
    private String outbound_id;
    
}
