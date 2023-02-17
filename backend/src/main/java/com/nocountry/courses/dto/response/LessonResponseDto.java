package com.nocountry.courses.dto.response;

import com.nocountry.courses.model.Course;
import com.nocountry.courses.model.Note;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@RequiredArgsConstructor
public class LessonResponseDto {

    private Long id;

    private String title;

    private String description;

    private int duration;

    private String urlVideo;

    private boolean completed;

    private String transcription;

    private Course course;

    //private Set<Note> notes;
}
