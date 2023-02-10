package com.nocountry.courses.repository;

import com.nocountry.courses.model.Roadmap;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoadmapRepository extends JpaRepository<Roadmap, Long> {
}
