package com.nocountry.courses.model;

import lombok.Data;

import jakarta.persistence.*;


@Entity
@Table(name = "lessons")
@Data
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private int duration;
    private String urlVideo;
    private boolean completed;
    private String transcription;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id")
    private Course course;

}
