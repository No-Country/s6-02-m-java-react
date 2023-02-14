package com.nocountry.courses.dto.response;

import com.nocountry.courses.model.Lesson;
import com.nocountry.courses.model.User;
import com.nocountry.courses.model.enums.Status;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class UserLessonResponseDto {

    private Lesson lesson;

    private User user;

    private Status status;
}
