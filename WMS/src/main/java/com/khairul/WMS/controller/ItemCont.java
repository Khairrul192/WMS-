package com.khairul.WMS.controller;

import com.khairul.WMS.model.itemmaster; 
import com.khairul.WMS.repository.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class ItemCont {

    @Autowired
    private ItemRepo itemRepo;

    @PostMapping // This MUST be here to accept the React 'axios.post' call
    public itemmaster saveItem(@RequestBody itemmaster item) {
        return itemRepo.save(item);
    }

    @GetMapping
    public List<itemmaster> getAllItems() {
        return itemRepo.findAll();
    }
}