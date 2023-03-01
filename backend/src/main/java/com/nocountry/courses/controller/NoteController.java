package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.NoteRequestDto;
import static com.nocountry.courses.handler.ResponseBuilder.*;
import com.nocountry.courses.service.INoteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/note")
public record NoteController(INoteService service) {

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody NoteRequestDto note){
        return responseBuilder(HttpStatus.CREATED, service.create(note));
    }

    @GetMapping("/my-notes")
    public ResponseEntity<?> findAllByUserId(){
        return responseBuilder(HttpStatus.OK, service.findAllByUserId());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @Valid @RequestBody NoteRequestDto note){
        return responseBuilder(HttpStatus.OK, service.update(id, note));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){
        service.delete(id);
    }
}
