package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nocountry.courses.model.enums.Category;

import com.nocountry.courses.model.enums.CourseDifficulty;
import lombok.*;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "courses")
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;

    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private CourseDifficulty difficulty;

    @Column(name = "total_duration")
    private int totalDuration;

    private Set<String> tags;

    @Enumerated(EnumType.STRING)
    private Category category;

    @OneToMany(mappedBy = "course", fetch = FetchType.EAGER)
    @JsonIgnore
    @JsonBackReference
    private Set<Lesson> lessons;


}
