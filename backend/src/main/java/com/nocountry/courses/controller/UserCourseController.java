package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.UserCourseRequestDto;
import static com.nocountry.courses.handler.ResponseBuilder.*;
import com.nocountry.courses.service.IUserCourseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-course")
public record UserCourseController (IUserCourseService userCourseService){

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return responseBuilder(HttpStatus.OK,userCourseService.findAll());
    }

    @GetMapping("/")
    public ResponseEntity<?> getByUser(){
        return responseBuilder(HttpStatus.OK,userCourseService.findByUser());
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<?> getByUserAndCourse(@PathVariable("courseId") Long courseId){
        return responseBuilder(HttpStatus.OK, userCourseService.findByCourse(courseId));
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody UserCourseRequestDto userCourse, BindingResult result){
        if(result.hasErrors()){
            return responseBuilder(HttpStatus.BAD_REQUEST,result);
        }
        return responseBuilder(HttpStatus.CREATED,userCourseService.create(userCourse));
    }
    @PostMapping("/course/{courseId}")
    public ResponseEntity<?> create(@PathVariable("courseId") Long courseId){
        return responseBuilder(HttpStatus.CREATED,userCourseService.create(courseId));
    }

    @PutMapping("/course/{courseId}/{progress}")
    public ResponseEntity<?> updateProgress(@PathVariable("courseId") Long courseId, @PathVariable("progress") Double progress){
        return responseBuilder(HttpStatus.CREATED,userCourseService.updateProgress(courseId, progress));
    }

}
