package com.khairul.WMS.model;

import jakarta.persistence.*;

@Entity
@Table(name = "vendor")
public class vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String vendor;
    private String regnumber;
    private String vendoradd;
    private String officeno;

}
