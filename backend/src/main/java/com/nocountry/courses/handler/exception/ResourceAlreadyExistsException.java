package com.nocountry.courses.handler.exception;

public class ResourceAlreadyExistsException extends RuntimeException {

    public ResourceAlreadyExistsException(String message){
        super(message);
    }
}
