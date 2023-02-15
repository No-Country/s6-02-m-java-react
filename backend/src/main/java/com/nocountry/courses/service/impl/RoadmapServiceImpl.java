package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.RoadmapRequestDto;
import com.nocountry.courses.dto.response.RoadmapResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Roadmap;
import com.nocountry.courses.model.enums.EMessageCode;
import com.nocountry.courses.repository.RoadmapRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IRoadmapService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class RoadmapServiceImpl implements IRoadmapService {

    private final GenericMapper mapper;
    private final RoadmapRepository repository;
    private final UserRepository userRepository;


    private final MessageSource messenger;

    @Override
    public List<RoadmapResponseDto> findAll() {
        return mapper.mapAll(repository.findAll(), RoadmapResponseDto.class);
    }

    @Override
    public RoadmapResponseDto findById(Long id) {

        Roadmap roadmap = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(EMessageCode.RESOURCE_NOT_FOUND.name(),
                new Object[] { Roadmap.class.getName(), id }, Locale.getDefault())));


        return mapper.map(roadmap, RoadmapResponseDto.class);
    }

    @Override
    public RoadmapResponseDto create(RoadmapRequestDto request) {

        User user = userRepository.findById(request.getUserId()).orElse(null);

        Roadmap roadmap = mapper.map(request, Roadmap.class);

        roadmap.setUser(user);

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
