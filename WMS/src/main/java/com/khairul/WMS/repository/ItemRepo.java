package com.khairul.WMS.repository;

import com.khairul.WMS.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepo extends JpaRepository<Item, Long> {
}