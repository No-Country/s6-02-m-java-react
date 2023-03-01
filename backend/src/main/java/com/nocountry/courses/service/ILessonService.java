package com.nocountry.courses.service;

import com.nocountry.courses.dto.request.LessonRequestDto;
import com.nocountry.courses.dto.request.UserLessonRequestDto;
import com.nocountry.courses.dto.response.LessonResponseDto;
import com.nocountry.courses.dto.response.UserLessonResponseDto;

import java.util.List;

public interface ILessonService extends ICrudService<LessonResponseDto, LessonRequestDto>{

    UserLessonResponseDto addLessonToUser(Long lessonId);

    UserLessonResponseDto changeStatus(UserLessonRequestDto lessonDto);

    List<LessonResponseDto> findAllByCourse(Long courseId);
}
