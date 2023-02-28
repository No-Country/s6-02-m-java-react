package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.RoadmapRequestDto;
import com.nocountry.courses.dto.response.RoadmapResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Roadmap;
import com.nocountry.courses.model.User;
import com.nocountry.courses.model.enums.EMessageCode;
import com.nocountry.courses.repository.RoadmapRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IRoadmapService;
import com.nocountry.courses.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class RoadmapServiceImpl implements IRoadmapService {

    private final GenericMapper mapper;
    private final RoadmapRepository repository;
    private final UserRepository userRepository;

    private final IUserService userService;

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

        User user = userService.getUser();

        Roadmap roadmap = mapper.map(request, Roadmap.class);

        roadmap.setUser(user);

        roadmap.setCourses(request.getCourses());

        return mapper.map(repository.save(roadmap), RoadmapResponseDto.class);
    }

    @Override
    public RoadmapResponseDto update(Long id, RoadmapRequestDto request) {

        Roadmap roadmap = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(), null, Locale.getDefault())));

        roadmap.setCourses(request.getCourses());

        return mapper.map(repository.save(roadmap), RoadmapResponseDto.class);
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public List<RoadmapResponseDto> findAllByUserId(Long id) {
        return mapper.mapAll(repository.findAllByUserId(id), RoadmapResponseDto.class);
    }
}
