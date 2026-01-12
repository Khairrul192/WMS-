package com.khairul.WMS.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "po_master")
public class inbound {
    @Id
    private String po_number;
    private LocalDate po_date;
    private String po_supplier;
    private String itemCode;
    private String Qty;
    
    public inbound() {}

    // Getters and Setters
    public String getPo_number() { return po_number; }
    public void setPo_number(String po_number) { this.po_number = po_number; }

    public LocalDate getPo_date() { return po_date; }
    public void setPo_date(LocalDate po_date) { this.po_date = po_date; }

    public String getPo_supplier() { return po_supplier; }
    public void setPo_supplier(String po_supplier) { this.po_supplier = po_supplier; }

    public String getItemCode() { return itemCode; }
    public void setItemCode(String itemCode) { this.itemCode = itemCode; }

    public String getQty() { return Qty; }
    public void setQty(String Qty) { this.Qty = Qty; }
}