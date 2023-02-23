package com.nocountry.courses.service.impl;

import com.nocountry.courses.model.TokenFavList;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.TokenRepository;
import com.nocountry.courses.service.ITokenFavService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.util.Objects;

@Service
public class TokenFavServiceImpl implements ITokenFavService {

    @Autowired
    TokenRepository tokenRepository;

    @Override
    public void saveConfirmationToken(TokenFavList tokenFavList) {
        tokenRepository.save(tokenFavList);
    }

    @Override
    public TokenFavList getToken(User user) {
        return tokenRepository.findTokenByUser(user);
    }

    @Override
    public User getUser(String token) {
        TokenFavList tokenFavList = tokenRepository.findTokenByToken(token);
        if (Objects.nonNull(tokenRepository)) {
            if (Objects.nonNull(tokenFavList.getUser())) {
                return tokenFavList.getUser();
            }
        }
        return null;
    }

    @Override
    public void authenticate(String token) throws AuthenticationException {
        if (!Objects.nonNull(token)) {
            throw new AuthenticationException("The token is not present");
        }
        if (!Objects.nonNull(getUser(token))) {
            throw new AuthenticationException("The token is not valid");
        }
    }
}
