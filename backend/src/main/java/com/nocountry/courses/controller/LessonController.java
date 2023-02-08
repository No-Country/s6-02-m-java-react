package com.nocountry.courses.controller;

import com.nocountry.courses.handler.ResponseBuilder;
import com.nocountry.courses.service.ILessonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
