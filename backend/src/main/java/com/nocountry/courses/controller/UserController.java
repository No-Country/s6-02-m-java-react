package com.nocountry.courses.controller;

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
    public ResponseEntity<UserResponseDto> create(@RequestBody UserRequestDto user){                
        return ResponseEntity.ok(service.create(user));
    }
}
