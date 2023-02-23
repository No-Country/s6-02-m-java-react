package com.nocountry.courses.repository;

import com.nocountry.courses.dto.response.LessonResponseDto;
import com.nocountry.courses.model.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LessonRepository extends JpaRepository<Lesson, Long> {

    Optional<List<Lesson>> findAllByCourse_Id(Long id);
}
