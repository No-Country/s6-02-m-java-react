package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.NoteRequestDto;
import com.nocountry.courses.handler.ResponseBuilder;
import com.nocountry.courses.service.INoteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/note")
public record NoteController(INoteService service) {

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody NoteRequestDto note){
        return ResponseBuilder.responseBuilder(HttpStatus.CREATED, service.create(note));
    }

    @GetMapping("{userId}")
    public ResponseEntity<?> findAllByUserId(@PathVariable("userId") Long id){
        return ResponseBuilder.responseBuilder(HttpStatus.OK, service.findAllByUserId(id));
    }

}
