package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.CourseRequestDto;
import static com.nocountry.courses.handler.ResponseBuilder.*;
import com.nocountry.courses.service.ICourseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/course")
public record CourseController (ICourseService courseService){

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody CourseRequestDto course, BindingResult result){
        if(result.hasErrors()){
            return responseBuilder(HttpStatus.BAD_REQUEST,result);
        }
        return responseBuilder(HttpStatus.CREATED,courseService.create(course));
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return responseBuilder(HttpStatus.OK,courseService.findAll());
    }


    @GetMapping("/public")
    public ResponseEntity<?> getAllPublic(){
        return responseBuilder(HttpStatus.OK,courseService.findAll());
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id){
        return responseBuilder(HttpStatus.OK,courseService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @Valid @RequestBody CourseRequestDto course){
        return responseBuilder(HttpStatus.OK,courseService.update(id, course));
    }
}
