package com.nocountry.courses.repository;

import com.nocountry.courses.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
