package com.nocountry.courses.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class NoteRequestDto {

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    @NotNull
    private Long lessonId;

}
