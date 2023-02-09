package com.nocountry.courses.dto.response;

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

    private Long lessonId;

    private Long userId;
    
}
