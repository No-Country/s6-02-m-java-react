package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.*;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users2")
@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
//@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String username;
    private String password;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private List<UserRole> roles = new ArrayList<>();

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

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

}
