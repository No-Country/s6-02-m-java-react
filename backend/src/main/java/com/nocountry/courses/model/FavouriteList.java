package com.nocountry.courses.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "favourites")
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
public class FavouriteList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @Temporal(TemporalType.DATE)
    private LocalDate createdDate;

    @PrePersist
    public void prePersist(){
        createdDate = LocalDate.now();
    }

    public FavouriteList(User user, Course course) {
        this.user = user;
        this.course = course;
        this.createdDate = LocalDate.now();
    }
}
