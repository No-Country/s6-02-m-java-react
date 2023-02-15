package com.nocountry.courses.dto.request;

import com.nocountry.courses.model.enums.CourseStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserCourseRequestDto {



    private Long userId;


    @NotNull
    private Long courseId;


    private CourseStatus status;

    private Double progress;
}
