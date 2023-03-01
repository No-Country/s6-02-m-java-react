package com.nocountry.courses.dto.response;

import com.nocountry.courses.model.Lesson;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class NoteResponseDto {

    private Long id;
    private String title;
    private String content;
    private Lesson lesson;

}
