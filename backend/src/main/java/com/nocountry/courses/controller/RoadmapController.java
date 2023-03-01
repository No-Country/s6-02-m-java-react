package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.RoadmapRequestDto;
import static com.nocountry.courses.handler.ResponseBuilder.*;
import com.nocountry.courses.service.IRoadmapService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/roadmap")
public record RoadmapController(IRoadmapService service) {

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody RoadmapRequestDto roadmap){
        return responseBuilder(HttpStatus.CREATED,service.create(roadmap));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> findAllByUserId(@PathVariable("userId") Long id){
        return responseBuilder(HttpStatus.OK,service.findAllByUserId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @Valid @RequestBody RoadmapRequestDto roadmap){
        return responseBuilder(HttpStatus.OK, service.update(id, roadmap));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        service.delete(id);
    }

}
