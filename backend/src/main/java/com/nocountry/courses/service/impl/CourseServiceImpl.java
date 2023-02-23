package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.CourseRequestDto;
import com.nocountry.courses.dto.response.CourseResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Course;
import com.nocountry.courses.repository.CourseRepository;
import com.nocountry.courses.service.ICourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements ICourseService {

    private final GenericMapper mapper;

    private final CourseRepository courseRepository;

    private final MessageSource messenger;
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
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[] {Course.class.getName(), id }, Locale.getDefault())));

        return mapper.map(course, CourseResponseDto.class);
    }



}
