package com.khairul.WMS.controller;

import com.khairul.WMS.model.vendor; 
import com.khairul.WMS.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/vendor")
@CrossOrigin(origins = "http://localhost:3000")
public class VendorCont {

    @Autowired
    private VendorRepository VendorRepository;

    @GetMapping
    public List<vendor> getAllVendors() { 
        return VendorRepository.findAll();
    }

    @PostMapping
    public vendor createVendor(@RequestBody vendor vendor) { 
        return VendorRepository.save(vendor);
    }

    @DeleteMapping("/{id}")
    public void deleteVendor(@PathVariable Long id) {
        VendorRepository.deleteById(id);
    }
}