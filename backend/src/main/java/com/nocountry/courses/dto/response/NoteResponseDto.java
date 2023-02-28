package com.nocountry.courses.dto.response;

import com.nocountry.courses.model.Lesson;
import com.nocountry.courses.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class NoteResponseDto {


    private String title;

    private String content;

    private Lesson lesson;

}
