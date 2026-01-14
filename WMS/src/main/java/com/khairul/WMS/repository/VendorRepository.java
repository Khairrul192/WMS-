package com.khairul.WMS.repository;

import com.khairul.WMS.model.vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<vendor, Long> { 
    
}