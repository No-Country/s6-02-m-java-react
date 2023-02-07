package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nocountry.courses.model.enums.Category;

import lombok.AllArgsConstructor;
import lombok.Data;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "courses")
@Data
@AllArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;

    @Column(name = "course_description")
    private String description;

    private String imageUrl;

    private String difficulty;

    @Column(name = "total_duration")
    private int totalDuration;

    private Set<String> tags;

    @Enumerated(EnumType.STRING)
    private Category categories;

    @JsonBackReference
    @ManyToMany(mappedBy = "courses")
    private Set<User> users;

    @OneToMany(mappedBy = "course")
    @JsonIgnore
    private Set<Lesson> lessons;

}
