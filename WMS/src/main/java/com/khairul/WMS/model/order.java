package com.khairul.WMS.model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "order")
public class order {
    @Id
    private String order_id;
    private String order_number;
    private String order_type;
    private String status;
    private LocalDate order_date;
    private String itemCode;
    private int itemQty;
    private LocalDate ShippedDate;


    public order() {}

    // Getters and Setters
    public String getOrder_id() { return order_id; }
    public void setOrder_id(String order_id) { this.order_id = order_id; }

    public String getOrder_type() { return order_type;}
    public void setOrder_type(String order_type) {this.order_type = order_type;}

    public String getOrder_number() { return order_number; }
    public void setOrder_number(String order_number) { this.order_number = order_number; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDate getOrder_date() { return order_date; }
    public void setOrder_date(LocalDate order_date) { this.order_date = order_date; }

    public String getItemCode() { return itemCode; }
    public void setItemCode(String itemCode) { this.itemCode = itemCode; }

    public int getItemQty() { return itemQty; }
    public void setItemQty(int itemQty) { this.itemQty = itemQty; }

    public LocalDate getShippedDate() { return ShippedDate; }
    public void setShippedDate(LocalDate ShippedDate) { this.ShippedDate = ShippedDate; }
}