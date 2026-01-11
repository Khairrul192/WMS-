package com.khairul.WMS.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "order_info")
public class orderinfo {
    @Id
    private String orderinfo_id;
    private String order_number;
    private String order_status;
    private LocalDate order_date;
    private String itemCode;
    private int itemQty;
    private LocalDate ShippedDate;
    private String Status;
    private String CancelReason;
    private String User;
    private String ContactNo;
    private String address1;
    private String address2;
    private String postcode;
    private String state;
    private String country;
    private int cost;
    private int total;

    public orderinfo() {}

    public String getOrderinfo_id() { return orderinfo_id; }
    public void setOrderinfo_id(String orderinfo_id) { this.orderinfo_id = orderinfo_id; }

    public String getOrder_number() { return order_number; }
    public void setOrder_number(String order_number) { this.order_number = order_number; }

    public String getOrder_status() { return order_status; }
    public void setOrder_status(String order_status) { this.order_status = order_status; }

    public LocalDate getOrder_date() { return order_date; }
    public void setOrder_date(LocalDate order_date) { this.order_date = order_date; }

    public String getItemCode() { return itemCode; }
    public void setItemCode(String itemCode) { this.itemCode = itemCode; }

    public int getItemQty() { return itemQty; }
    public void setItemQty(int itemQty) { this.itemQty = itemQty; }

    public LocalDate getShippedDate() { return ShippedDate; }
    public void setShippedDate(LocalDate ShippedDate) { this.ShippedDate = ShippedDate; }

    public String getStatus() { return Status; }
    public void setStatus(String Status) { this.Status = Status; }

    public String getCancelReason() { return CancelReason; }
    public void setCancelReason(String CancelReason) { this.CancelReason = CancelReason; }

    public String getUser() { return User; }
    public void setUser(String User) { this.User = User; }

    public String getContactNo() { return ContactNo; }
    public void setContactNo(String ContactNo) { this.ContactNo = ContactNo; }

    public String getAddress1() { return address1; }
    public void setAddress1(String address1) { this.address1 = address1; }

    public String getAddress2() { return address2; }
    public void setAddress2(String address2) { this.address2 = address2; }

    public String getPostcode() { return postcode; }
    public void setPostcode(String postcode) { this.postcode = postcode; }

    public String getState() { return state; }
    public void setState(String state) { this.state = state; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public int getCost() { return cost; }
    public void setCost(int cost) { this.cost = cost; }

    public int getTotal() { return total; }
    public void setTotal(int total) { this.total = total; }

}
