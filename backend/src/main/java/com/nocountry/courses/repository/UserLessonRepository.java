package com.nocountry.courses.repository;

import com.nocountry.courses.model.UserLesson;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserLessonRepository extends JpaRepository<UserLesson, Long> {

    Optional<UserLesson> findByUserIdAndLessonId(Long userId, Long lessonId);
}
