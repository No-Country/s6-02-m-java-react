package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.NoteRequestDto;
import com.nocountry.courses.dto.response.NoteResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Lesson;
import com.nocountry.courses.model.Note;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.LessonRepository;
import com.nocountry.courses.repository.NoteRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.INoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class NoteServiceImpl implements INoteService {

    private final GenericMapper mapper;
    private final NoteRepository repository;

    private final LessonRepository lessonRepository;

    private final UserRepository userRepository;
    private final MessageSource messenger;

    @Override
    public List<NoteResponseDto> findAll(){
        return mapper.mapAll(repository.findAll(), NoteResponseDto.class);
    }

    @Override
    public NoteResponseDto findById(Long id){
        Note note = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { Note.class.getName(), id }, Locale.getDefault())));

        return mapper.map(note, NoteResponseDto.class);
    }

    @Override
    public NoteResponseDto create(NoteRequestDto request){

        User user = userRepository.findById(request.getUserId()).orElse(null);

        Lesson lesson = lessonRepository.findById(request.getLessonId()).orElse(null);

        Note note = mapper.map(request, Note.class);

        note.setUser(user);

        note.setLesson(lesson);

        return mapper.map(repository.save(note), NoteResponseDto.class);
    }

    public NoteResponseDto update(Long id, NoteRequestDto request){


        return null;
    }



    @Override
    public void delete(Long id) {

    }


}
