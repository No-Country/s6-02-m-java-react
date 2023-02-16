package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.service.impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public record UserController(UserServiceImpl userService) {

    @GetMapping("/getall")
    public ResponseEntity<List<UserResponseDto>> getAll() {
        List<UserResponseDto> userList = userService.findAll();
        return ResponseEntity.ok(userList);
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<String> deleteUser(@PathVariable String email) {
        userService.delete(email);
        return ResponseEntity.status(HttpStatus.OK).body("User deleted");
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<UserResponseDto> updateUser(@RequestBody UserRequestDto userRequestDto, @PathVariable Long id) {
        return ResponseEntity.ok(userService.update(userRequestDto, id));
    }
}
