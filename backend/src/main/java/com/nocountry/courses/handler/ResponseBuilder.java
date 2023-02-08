package com.nocountry.courses.handler;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseBuilder {
    
    public static ResponseEntity<?> responseBuilder(HttpStatus httpStatus, String path, Object object){
        Map<String, Object> response = new HashMap<>();
        response.put("status", httpStatus);
        response.put("path", path);        
        response.put((object instanceof ErrorDetail) ? "error" : "response", object);

        return ResponseEntity.status(httpStatus).body(response);
    };

    public static ResponseEntity<?> responseBuilder(HttpStatus httpStatus, Object object){
        Map<String, Object> response = new HashMap<>();
        response.put("status", httpStatus);
        response.put((object instanceof ErrorDetail) ? "error" : "response", object);

        return ResponseEntity.status(httpStatus).body(response);
    };
}
