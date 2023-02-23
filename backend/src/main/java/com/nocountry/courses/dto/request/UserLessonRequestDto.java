package com.nocountry.courses.dto.request;

import com.nocountry.courses.model.enums.Status;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class UserLessonRequestDto {

    @NotNull
    private Long lessonId;
    @NotBlank
    private Status status;
}
