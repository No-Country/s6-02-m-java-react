package com.nocountry.courses.repository;

import com.nocountry.courses.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD
import java.util.List;

=======
@Repository
>>>>>>> origin/feature-filterSearch
public interface NoteRepository extends JpaRepository<Note, Long> {

        List<Note> findAllByUserId(Long id);
}
