package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.CourseRequestDto;
import com.nocountry.courses.dto.response.CourseResponseDto;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Course;
import com.nocountry.courses.repository.CourseRepository;
import com.nocountry.courses.service.ICourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ICourseService {

    private final GenericMapper mapper;

    private final CourseRepository courseRepository;
    @Override
    public CourseResponseDto create(CourseRequestDto request) {
        Course course = mapper.map(request, Course.class);

        return mapper.map(courseRepository.save(course), CourseResponseDto.class);
    }

    @Override
    public CourseResponseDto update(Long id, CourseRequestDto request) {
        Course course = courseRepository.findById(id).orElse(null);

        course.setTitle(request.getTitle());
        course.setDescription(request.getDescription());
        course.setImageUrl(request.getImageUrl());
        course.setDifficulty(request.getDifficulty());
        course.setTotalDuration(request.getTotalDuration());
        course.setTags(request.getTags());
        course.setCategory(request.getCategory());

        return mapper.map(courseRepository.save(course), CourseResponseDto.class);
    }

    @Override
    public void delete(Long id) {
        //TODO
    }

    @Override
    public List<CourseResponseDto> findAll() {
        return mapper.mapAll(courseRepository.findAll(), CourseResponseDto.class);
    }

    @Override
    public CourseResponseDto findById(Long id) {
        Course course = courseRepository.findById(id).orElse(null);

        if(course==null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "course Not Found");

        return mapper.map(course, CourseResponseDto.class);
    }



}
