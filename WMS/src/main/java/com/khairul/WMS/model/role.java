package com.khairul.WMS.model;

import jakarta.persistence.*;

@Entity
@Table(name = "role")
public class role {
    @Id
    private String role_id;
    private String role_name;

    public role() {}
    public String getrole_id() { return role_id; }
    public void setrole_id(String role_id) { this.role_id = role_id; }
    public String getrole_name() { return role_name; }
    public void setrole_name(String role_name) { this.role_name = role_name; }
}
