package com.nocountry.courses.repository;

import com.nocountry.courses.model.AuthToken;
import com.nocountry.courses.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<AuthToken, Long> {
    AuthToken findTokenByUser(User user);
    AuthToken findTokenByToken(String token);
}
