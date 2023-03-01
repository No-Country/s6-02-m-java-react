package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nocountry.courses.model.enums.Category;
import lombok.Data;

<<<<<<< HEAD
import com.nocountry.courses.model.enums.CourseDifficulty;
import lombok.*;
=======
>>>>>>> origin/feature-filterSearch
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "courses")
<<<<<<< HEAD
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
=======
@Data
>>>>>>> origin/feature-filterSearch
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

<<<<<<< HEAD
    @OneToMany(mappedBy = "course", fetch = FetchType.EAGER)
=======
    @JsonBackReference
    @ManyToMany(mappedBy = "courses")
    private Set<User> users;

    @OneToMany(mappedBy = "course")
>>>>>>> origin/feature-filterSearch
    @JsonIgnore
    private Set<Lesson> lessons;


}
