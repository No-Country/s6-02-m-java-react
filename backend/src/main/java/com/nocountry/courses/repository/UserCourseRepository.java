package com.nocountry.courses.repository;

import com.nocountry.courses.model.UserCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserCourseRepository extends JpaRepository<UserCourse, Long> {

    @Query(value = "SELECT uc FROM UserCourse AS uc JOIN uc.user u JOIN uc.course c WHERE u.id=:userId  AND c.id=:courseId")
    public Optional<UserCourse> getByUserAndCourse(@Param("userId") Long userId,@Param("courseId")  Long courseId);

    @Query(value = "SELECT uc FROM UserCourse AS uc JOIN uc.user u WHERE u.id=:userId ")
    public List<UserCourse> getByUser(@Param("userId") Long userId);
}
