package com.nocountry.courses.service;

import com.nocountry.courses.model.TokenFavList;
import com.nocountry.courses.model.User;

import javax.naming.AuthenticationException;

public interface ITokenFavService {

    public void saveConfirmationToken(TokenFavList tokenFavList);

    public TokenFavList getToken(User user);

    public User getUser(String token);

    public void authenticate(String token) throws AuthenticationException;
}
