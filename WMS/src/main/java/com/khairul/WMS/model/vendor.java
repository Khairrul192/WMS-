package com.khairul.WMS.model;

import jakarta.persistence.*;

@Entity
@Table(name = "vendor")
public class vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String vendor;
    private String vendorcode;
    private String regnumber;
    private String vendoradd;
    private String officeno;
    private String status;

    public vendor(){}
    // Getters
    public Long getId() { return id; }
    public String getVendor() { return vendor; }
    public String getVendorcode() { return vendorcode; }
    public String getRegnumber() { return regnumber; }
    public String getVendoradd() { return vendoradd; }
    public String getOfficeno() { return officeno; }
    public String getStatus() {return status;}

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setVendor(String vendor) { this.vendor = vendor; }
    public void setVendorcode(String vendorcode) { this.vendorcode = vendorcode; }
    public void setRegnumber(String regnumber) { this.regnumber = regnumber; }
    public void setVendoradd(String vendoradd) { this.vendoradd = vendoradd; }
    public void setOfficeno(String officeno) { this.officeno = officeno; }
    public void setStatus (String status) {this.status = status;}
}
