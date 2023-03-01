package com.nocountry.courses.repository;

import com.nocountry.courses.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
=======
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
>>>>>>> origin/feature-filterSearch
}
