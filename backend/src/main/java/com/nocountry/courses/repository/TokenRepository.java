package com.nocountry.courses.repository;

import com.nocountry.courses.model.TokenFavList;
import com.nocountry.courses.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<TokenFavList, Long> {
    TokenFavList findTokenByUser(User user);
    TokenFavList findTokenByToken(String token);
}
