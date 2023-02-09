package com.nocountry.courses.service.impl;

import com.nocountry.courses.model.AuthToken;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.TokenRepository;
import com.nocountry.courses.service.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.util.Objects;

@Service
public class AuthService implements IAuthService {

    @Autowired
    TokenRepository tokenRepository;

    @Override
    public void saveConfirmationToken(AuthToken authToken) {
        tokenRepository.save(authToken);
    }

    @Override
    public AuthToken getToken(User user) {
        return tokenRepository.findTokenByUser(user);
    }

    @Override
    public User getUser(String token) {
        AuthToken authToken = tokenRepository.findTokenByToken(token);
        if (Objects.nonNull(tokenRepository)) {
            if (Objects.nonNull(authToken.getUser())) {
                return authToken.getUser();
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
