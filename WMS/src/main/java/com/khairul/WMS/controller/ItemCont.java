package com.khairul.WMS.controller;

import com.khairul.WMS.model.Item;
import com.khairul.WMS.repository.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin("http://localhost:3000")
public class ItemCont {

    @Autowired
    private ItemRepo itemRepository;

    @GetMapping
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return itemRepository.save(item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        itemRepository.deleteById(id);
    }
}