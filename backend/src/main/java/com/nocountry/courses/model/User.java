package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.*;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@RequiredArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String name;
    private String password;

    @Column(name = "register_date")
    @Temporal(TemporalType.DATE)
    private LocalDate registerDate;

    private List<Long> idFavourites;

    @JsonManagedReference
    @ManyToMany
    @JoinTable(name = "users_courses",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<Course> courses;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Note> notes;

    @PrePersist
    public void prePersist(){
        registerDate = LocalDate.now();
    }
}
