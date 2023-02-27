package com.nocountry.courses.dto.response;

import com.nocountry.courses.model.Course;
import com.nocountry.courses.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class RoadmapResponseDto {

    private String title;

    private Set<Course> courses;
}
