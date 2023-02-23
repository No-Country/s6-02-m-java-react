package com.nocountry.courses.service;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.BasicCourseResponseDto;
import com.nocountry.courses.dto.response.CourseResponseDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.model.User;

import java.util.List;

public interface IUserService {

    User getUser();

    UserResponseDto update(UserRequestDto requestDto, Long id);

    void delete(String email);

    List<User> findAll();

    User findById(Long id);

    List<BasicCourseResponseDto> addFavouriteCourseToUser(Long user_id, Long course_id);
}
