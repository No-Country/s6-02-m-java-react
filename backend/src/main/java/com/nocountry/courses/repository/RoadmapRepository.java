package com.nocountry.courses.repository;

import com.nocountry.courses.model.Roadmap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoadmapRepository extends JpaRepository<Roadmap, Long> {

    List<Roadmap> findAllByUserId(Long id);
}
