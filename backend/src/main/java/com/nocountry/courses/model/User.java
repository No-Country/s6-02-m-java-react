package com.nocountry.courses.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nocountry.courses.model.enums.Role;
import lombok.*;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    @Column(unique = true)
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "register_date")
    @Temporal(TemporalType.DATE)
    private LocalDate registerDate;

    @ElementCollection
    private List<Long> idCourses;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Note> notes;

    @PrePersist
    public void prePersist(){
        registerDate = LocalDate.now();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
