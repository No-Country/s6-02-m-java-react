package com.nocountry.courses.model;

import com.nocountry.courses.model.enums.Status;

import jakarta.persistence.*;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

import static com.nocountry.courses.model.enums.Status.STARTED;

@Entity
@Table(name = "user_lesson")
@Getter
@Setter
@RequiredArgsConstructor
@IdClass(UserLesson.PrimaryKey.class)
public class UserLesson {
    @Id
    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;

    @Id
    @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private Status status;


    @PrePersist
    public void prePersist(){
        status = STARTED;
    }

    public UserLesson(Lesson lesson, User user) {
        this.lesson = lesson;
        this.user = user;
    }

    static class PrimaryKey implements Serializable {

        private static final long serialVersionUID = 1L;

        private Lesson lesson;
        private User user;

    }
}
