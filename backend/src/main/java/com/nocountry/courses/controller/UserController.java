package com.nocountry.courses.controller;

import com.nocountry.courses.dto.user.LoginDto;

import com.nocountry.courses.service.impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public record UserController(UserServiceImpl userService) {

    @GetMapping
    public ResponseEntity<List<LoginDto>> getAll() {
        List<LoginDto> userList = userService.findAll();
        return ResponseEntity.ok(userList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }

}
