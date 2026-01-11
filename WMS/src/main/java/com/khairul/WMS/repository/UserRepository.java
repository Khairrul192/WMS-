package com.khairul.WMS.repository;

import com.khairul.WMS.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username); // Spring JPA writes the SQL for this automatically!
}