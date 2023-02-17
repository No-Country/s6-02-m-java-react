package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.CourseRequestDto;
import com.nocountry.courses.dto.response.CourseResponseDto;
import com.nocountry.courses.handler.ResponseBuilder;
import com.nocountry.courses.service.ICourseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;

@RestController
@RequestMapping("/course")
public record CourseController (ICourseService courseService){

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody CourseRequestDto course, BindingResult result){
        if(result.hasErrors()){
            return ResponseBuilder.responseBuilder(HttpStatus.BAD_REQUEST,result);
        }
        return ResponseBuilder.responseBuilder(HttpStatus.CREATED,courseService.create(course));
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,courseService.findAll());
    }


    @GetMapping("/public")
    public ResponseEntity<?> getAllPublic(){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,courseService.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,courseService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @Valid @RequestBody CourseRequestDto course){
        return ResponseBuilder.responseBuilder(HttpStatus.OK,courseService.update(id, course));
    }
}
