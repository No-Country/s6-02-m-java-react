package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.CourseRequestDto;
import com.nocountry.courses.dto.response.CourseResponseDto;
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
    public ResponseEntity<CourseResponseDto> create(@Valid @RequestBody CourseRequestDto course, BindingResult result){
        if(result.hasErrors()){
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST,result.getAllErrors().toString());
        }
        return ResponseEntity.ok(courseService.create(course));
    }

    @GetMapping()
    public ResponseEntity<List<CourseResponseDto>> getAll(){
        return ResponseEntity.ok(courseService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseResponseDto> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(courseService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseResponseDto> update(@PathVariable("id") Long id, @Valid @RequestBody CourseRequestDto course){
        return ResponseEntity.ok(courseService.update(id, course));
    }
}