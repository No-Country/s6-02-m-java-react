package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.UserLessonRequestDto;
import com.nocountry.courses.handler.ResponseBuilder;
import com.nocountry.courses.service.ILessonService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lesson")
public record LessonController(ILessonService service) {

    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,service.findById(id));
    }

    @PostMapping("/{lessonId}/user/{userId}")
    public ResponseEntity<?> addLessonToUser(@PathVariable Long userId,@PathVariable Long lessonId){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,service.addLessonToUser(userId,lessonId));
    }

    @PutMapping("/status")
    public ResponseEntity<?> changeStatus(@RequestBody UserLessonRequestDto lessonDto){
        return ResponseBuilder.responseBuilder(HttpStatus.OK, service.changeStatus(lessonDto));
    }
}
