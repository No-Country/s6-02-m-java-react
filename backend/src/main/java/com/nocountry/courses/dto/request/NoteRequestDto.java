package com.nocountry.courses.dto.request;

public class NoteRequestDto {

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @NotNull
    private Long lessonId;

    @NotNull
    private Long userId;


}
