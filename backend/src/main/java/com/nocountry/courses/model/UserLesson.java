package com.nocountry.courses.model;

import com.nocountry.courses.model.enums.Status;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import static com.nocountry.courses.model.enums.Status.INICIO;

@Entity
@Table(name = "user_lesson")
@Getter
@Setter
@RequiredArgsConstructor
public class UserLesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private Status status;


    @PrePersist
    public void prePersist(){
        status = INICIO;
    }

    public UserLesson(Lesson lesson, User user) {
        this.lesson = lesson;
        this.user = user;
    }
}
