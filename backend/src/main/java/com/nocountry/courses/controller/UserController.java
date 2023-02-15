package com.nocountry.courses.controller;

import com.nocountry.courses.handler.ResponseBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.service.IUserService;

@RestController
@RequestMapping("/user")
public record UserController (IUserService service) {

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody UserRequestDto user){
        return ResponseBuilder.responseBuilder(HttpStatus.CREATED, service.create(user));
    }

}
