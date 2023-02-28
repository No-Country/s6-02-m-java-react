package com.nocountry.courses.dto.request;

import com.nocountry.courses.model.enums.Category;
import com.nocountry.courses.model.enums.CourseDifficulty;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
public class CourseRequestDto {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private CourseDifficulty difficulty;

    @NotNull
    private int totalDuration;


    private Set<String> tags;

    @Enumerated(EnumType.STRING)
    private Category category;

}
