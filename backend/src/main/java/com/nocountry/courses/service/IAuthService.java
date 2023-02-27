package com.nocountry.courses.service;

import com.nocountry.courses.model.AuthToken;
import com.nocountry.courses.model.User;

import javax.naming.AuthenticationException;

public interface IAuthService {

    public void saveConfirmationToken(AuthToken authToken);

    public AuthToken getToken(User user);

    public User getUser(String token);

    public void authenticate(String token) throws AuthenticationException;
}
