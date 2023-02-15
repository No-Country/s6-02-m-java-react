package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.nocountry.courses.model.enums.CourseStatus;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Table(name = "users_courses", uniqueConstraints = { @UniqueConstraint(name = "user_course", columnNames = { "course_id", "user_id" }) })
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
@Builder

@IdClass(UserCourse.PrimaryKey.class)
public class UserCourse{

    /*@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;*/

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id")
    private Course course;

    @Enumerated(EnumType.STRING)
    private CourseStatus status;

    private Double progress;

    static class PrimaryKey implements Serializable {
        private Long user;
        private Long course;
    }
}
