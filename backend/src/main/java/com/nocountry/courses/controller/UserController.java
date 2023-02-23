package com.nocountry.courses.controller;

import com.nocountry.courses.handler.ResponseBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.service.impl.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public record UserController(UserServiceImpl userService) {

    @GetMapping("/me")
    public ResponseEntity<?> getMyUser(){
        return ResponseBuilder.responseBuilder(HttpStatus.OK, userService.getMyUser());
    }

    @PutMapping("/update")
    public ResponseEntity<UserResponseDto> updateUser(@RequestBody UserRequestDto userRequestDto) {
        return ResponseEntity.ok(userService.update(userRequestDto, 1L));
    }
}
