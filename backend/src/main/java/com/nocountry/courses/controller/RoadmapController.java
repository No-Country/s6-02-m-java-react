package com.nocountry.courses.controller;

import com.nocountry.courses.dto.request.RoadmapRequestDto;
import com.nocountry.courses.dto.response.RoadmapResponseDto;
import com.nocountry.courses.service.IRoadmapService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/roadmap")
public record RoadmapController(IRoadmapService service) {

    @PostMapping("/create")
    public ResponseEntity<RoadmapResponseDto> create(@RequestBody RoadmapRequestDto roadmap){
        return ResponseEntity.ok(service.create(roadmap));
    }
}
