package com.nocountry.courses.dto.response;

import com.nocountry.courses.model.Course;
import com.nocountry.courses.model.User;
import com.nocountry.courses.model.enums.CourseStatus;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class UserCourseResponseDto {


    private User user;

    private Course course;

    private CourseStatus status;

    private Double progress;
}
