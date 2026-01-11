package com.khairul.WMS.controller;

import com.khairul.WMS.model.User;
import com.khairul.WMS.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000") // Allows React to talk to Java
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
    // 1. Check if username and password are the same
    if (user.getUsername().equalsIgnoreCase(user.getPassword())) {
        return "Error: Username and Password cannot be the same!";
    }

    // 2. Check if username already exists in DB
    User existingUser = userRepository.findByUsername(user.getUsername());
    if (existingUser != null) {
        return "Error: Username '" + user.getUsername() + "' is already taken!";
    }

    // 3. If everything is fine, save the user
    userRepository.save(user);
    return "Registration Successful!";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return "Login Successful!";
        }
        return "Error: Invalid username or password!";
    }
}