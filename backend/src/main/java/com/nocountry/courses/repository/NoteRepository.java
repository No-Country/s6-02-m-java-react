package com.nocountry.courses.repository;

import com.nocountry.courses.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
