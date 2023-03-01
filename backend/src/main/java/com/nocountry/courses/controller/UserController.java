package com.nocountry.courses.controller;

import static com.nocountry.courses.handler.ResponseBuilder.*;

import com.nocountry.courses.model.User;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.service.impl.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/user")
public record UserController(UserServiceImpl userService) {

    @GetMapping("/me")
    public ResponseEntity<?> getMyUser() {
        return responseBuilder(HttpStatus.OK, userService.getMyUser());
    }

    @PutMapping("/update")
    public ResponseEntity<UserResponseDto> updateUser(@RequestBody UserRequestDto userRequestDto) {
        return ResponseEntity.ok(userService.update(userRequestDto, 1L));
    }

    @GetMapping("/get-all")
    public ResponseEntity<Collection<User>> getAllUser() {
        List<User> users = userService.findAll();
        if (users.isEmpty()) {
            ResponseEntity.status(HttpServletResponse.SC_NO_CONTENT);
        }
        return ResponseEntity.ok(users);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<User> findUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @GetMapping("/favourites/{course_id}")
    public ResponseEntity<?> addCourseToFavouriteList(@PathVariable Long course_id) {
            return responseBuilder(HttpStatus.OK, userService.addFavouriteCourseToUser(course_id));
    }
}
