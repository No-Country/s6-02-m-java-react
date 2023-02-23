package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.CourseRequestDto;
import com.nocountry.courses.dto.request.UserCourseRequestDto;
import com.nocountry.courses.dto.response.CourseResponseDto;
import com.nocountry.courses.dto.response.UserCourseResponseDto;
import com.nocountry.courses.handler.ResponseBuilder;
import com.nocountry.courses.service.IUserCourseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-course")
public record UserCourseController (IUserCourseService userCourseService){

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,userCourseService.findAll());
    }

    @GetMapping("/")
    public ResponseEntity<?> getByUser(){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,userCourseService.findByUser());
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<?> getByUserAndCourse(@PathVariable("courseId") Long courseId){
        return ResponseBuilder.responseBuilder(HttpStatus.OK, userCourseService.findByCourse(courseId));
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody UserCourseRequestDto userCourse, BindingResult result){
        if(result.hasErrors()){
            return ResponseBuilder.responseBuilder(HttpStatus.BAD_REQUEST,result);
        }
        return ResponseBuilder.responseBuilder(HttpStatus.CREATED,userCourseService.create(userCourse));
    }
    @PostMapping("/course/{courseId}")
    public ResponseEntity<?> create(@PathVariable("courseId") Long courseId){
        return ResponseBuilder.responseBuilder(HttpStatus.CREATED,userCourseService.create(courseId));
    }

    @PutMapping("/course/{courseId}/{progress}")
    public ResponseEntity<?> updateProgress(@PathVariable("courseId") Long courseId, @PathVariable("progress") Double progress){
        return ResponseBuilder.responseBuilder(HttpStatus.CREATED,userCourseService.updateProgress(courseId, progress));
    }

}
