package com.nocountry.courses.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class LessonRequestDto {
    @NotNull
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotNull
    private int duration;

    @NotBlank
    private String urlVideo;

    private String transcription;

    @NotNull
    private Long course_id;

}
