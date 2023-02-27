package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.NoteRequestDto;
import com.nocountry.courses.dto.response.NoteResponseDto;
import com.nocountry.courses.service.INoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/note")
public record NoteController(INoteService service) {

    @PostMapping("/create")
    public ResponseEntity<NoteResponseDto> create(@RequestBody NoteRequestDto note){
        return ResponseEntity.ok(service.create(note));
    }

}
