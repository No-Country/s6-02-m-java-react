package com.nocountry.courses.repository;

import com.nocountry.courses.model.UserLesson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserLessonRepository extends JpaRepository<UserLesson, Long> {

    public UserLesson findByUserIdAndLessonId(Long userId, Long lessonId);
}
