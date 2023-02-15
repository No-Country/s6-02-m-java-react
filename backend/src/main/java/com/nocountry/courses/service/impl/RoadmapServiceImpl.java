package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.RoadmapRequestDto;
import com.nocountry.courses.dto.response.RoadmapResponseDto;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Roadmap;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.RoadmapRepository;
import com.nocountry.courses.service.IRoadmapService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoadmapServiceImpl implements IRoadmapService {

    private final GenericMapper mapper;
    private final RoadmapRepository repository;

    @Override
    public List<RoadmapResponseDto> findAll() {
        return mapper.mapAll(repository.findAll(), RoadmapResponseDto.class);
    }

    @Override
    public RoadmapResponseDto findById(Long id) {

        Roadmap roadmap = repository.findById(id).orElse(null);

        if(roadmap == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Roadmap Not Found");
        }

        return mapper.map(roadmap, RoadmapResponseDto.class);
    }

    @Override
    public RoadmapResponseDto create(RoadmapRequestDto request) {

        Roadmap roadmap = mapper.map(request, Roadmap.class);

        return mapper.map(repository.save(roadmap), RoadmapResponseDto.class);
    }

    @Override
    public RoadmapResponseDto update(Long id, RoadmapRequestDto request) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public List<RoadmapResponseDto> findAllByUserId(Long id) {
        return mapper.mapAll(repository.findAllByUserId(id), RoadmapResponseDto.class);
    }
}
