package com.nocountry.courses.model;

import lombok.Data;

import jakarta.persistence.*;


@Entity
@Table(name = "notes")
@Data
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
/*    private User user;
    private Lesson lesson;*/
}
