package com.khairul.WMS.repository;

import com.khairul.WMS.model.itemmaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepo extends JpaRepository<itemmaster, String> { 
    // This resolves the red line under String
}