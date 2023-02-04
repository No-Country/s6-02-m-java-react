package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nocountry.courses.model.enums.Category;
import lombok.Data;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "courses")
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private boolean favourite;
    private String difficulty;
    private int totalDuration;
    private Set<String> tags;
    private Enum<Category> categories;

    @JsonBackReference
    @ManyToMany(mappedBy = "courses")
    private Set<User> users;

    @OneToMany(mappedBy = "course")
    @JsonIgnore
    private Set<Lesson> lessons;

}
