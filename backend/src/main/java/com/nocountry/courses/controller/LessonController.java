package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.UserLessonRequestDto;
import static com.nocountry.courses.handler.ResponseBuilder.*;
import com.nocountry.courses.service.ILessonService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/lesson")
public record LessonController(ILessonService service) {

    @GetMapping
    public ResponseEntity<?> getAll(){
        return responseBuilder(HttpStatus.OK,service.findAll());
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<?> getAllByCourse(@PathVariable Long id){
        return responseBuilder(HttpStatus.OK,service.findAllByCourse(id));
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return responseBuilder(HttpStatus.OK,service.findById(id));
    }

    @PostMapping("/{lessonId}")
    public ResponseEntity<?> addLessonToUser(@PathVariable Long lessonId){
        return responseBuilder(HttpStatus.OK,service.addLessonToUser(lessonId));
    }

    @PutMapping("/status")
    public ResponseEntity<?> changeStatus(@RequestBody UserLessonRequestDto lessonDto){
        return responseBuilder(HttpStatus.OK, service.changeStatus(lessonDto));
    }
}
