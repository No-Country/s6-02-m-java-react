package com.nocountry.courses.dto.request;

import com.nocountry.courses.model.Course;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
public class RoadmapRequestDto {

    @NotBlank
    private String title;

    private Set<Course> courses;
}
