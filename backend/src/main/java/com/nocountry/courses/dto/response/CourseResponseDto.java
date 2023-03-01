package com.nocountry.courses.dto.response;

import com.nocountry.courses.model.Lesson;
import com.nocountry.courses.model.enums.Category;
import com.nocountry.courses.model.enums.CourseDifficulty;
import lombok.*;

import java.util.Set;

@Getter @Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class CourseResponseDto {

    private Long id;

    private String title;

    private String description;

    private String imageUrl;

    private CourseDifficulty difficulty;

    private int totalDuration;

    private Set<String> tags;

    private Category category;

    private Set<Lesson> lessons;
}
