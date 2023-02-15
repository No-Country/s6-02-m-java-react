package com.nocountry.courses.service;

import com.nocountry.courses.dto.request.UserCourseRequestDto;
import com.nocountry.courses.dto.response.UserCourseResponseDto;
import com.nocountry.courses.model.Course;

import java.util.List;

public interface IUserCourseService extends ICrudService<UserCourseResponseDto, UserCourseRequestDto>{

    UserCourseResponseDto findByCourse(Long courseId);

    UserCourseResponseDto create(Long courseId);

    List<UserCourseResponseDto> findByUser();

    UserCourseResponseDto updateProgress(Long courseId, Double progress);
    UserCourseResponseDto updateProgress(Course course);
}
