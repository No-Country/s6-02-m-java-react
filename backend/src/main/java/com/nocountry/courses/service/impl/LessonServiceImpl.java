package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.LessonRequestDto;
import com.nocountry.courses.dto.response.LessonResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Lesson;
import com.nocountry.courses.repository.LessonRepository;
import com.nocountry.courses.service.ILessonService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LessonServiceImpl implements ILessonService {

    private final LessonRepository repository;
    private final GenericMapper mapper;

    @Override
    public List<LessonResponseDto> findAll() {
        return mapper.mapAll(repository.findAll(),LessonResponseDto.class);
    }

    @Override
    public LessonResponseDto findById(Long id) {
        Lesson lesson = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("LESSON NOT FOUND"));
       return mapper.map(lesson, LessonResponseDto.class);
    }

    @Override
    public LessonResponseDto create(LessonRequestDto request) {
        return null;
    }

    @Override
    public LessonResponseDto update(Long id, LessonRequestDto request) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
