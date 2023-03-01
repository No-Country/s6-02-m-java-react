package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.LessonRequestDto;
import com.nocountry.courses.dto.request.UserLessonRequestDto;
import com.nocountry.courses.dto.response.LessonResponseDto;
import com.nocountry.courses.dto.response.UserLessonResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Lesson;
import com.nocountry.courses.model.User;
import com.nocountry.courses.model.UserLesson;
import com.nocountry.courses.model.enums.EMessageCode;
import com.nocountry.courses.model.enums.Status;
import com.nocountry.courses.repository.LessonRepository;
import com.nocountry.courses.repository.UserLessonRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.ILessonService;

import com.nocountry.courses.service.IUserCourseService;
import lombok.RequiredArgsConstructor;

import org.springframework.context.MessageSource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

import static com.nocountry.courses.model.enums.EMessageCode.JOIN_RESOURCE_NOT_FOUND;
import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class LessonServiceImpl implements ILessonService {

    private final LessonRepository lessonRepository;
    private final UserRepository userRepository;
    private final UserLessonRepository userLessonRepository;
    private final MessageSource messenger;
    private final GenericMapper mapper;

    private final IUserCourseService userCourseService;

    @Override
    public List<LessonResponseDto> findAll() {
        return mapper.mapAll(lessonRepository.findAll(),LessonResponseDto.class);
    }
    @Override
    public List<LessonResponseDto> findAllByCourse(Long id) {


        return mapper.mapAll(lessonRepository.findAllByCourse_Id(id)
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[] {Lesson.class.getName(), id }, Locale.getDefault()))), LessonResponseDto.class);
    }

    @Override
    public LessonResponseDto findById(Long id) {

        Lesson lesson = lessonRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[] {Lesson.class.getName(), id }, Locale.getDefault())));
       return mapper.map(lesson, LessonResponseDto.class);
    }

    @Override
    public UserLessonResponseDto addLessonToUser(Long lessonId){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName()).orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { User.class.getName(), authentication.getName() }, Locale.getDefault())));
        Lesson lesson = lessonRepository.findById(lessonId).orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { Lesson.class.getName(),lessonId }, Locale.getDefault())));

        return mapper.map(userLessonRepository.save(new UserLesson(lesson, user)), UserLessonResponseDto.class);
    }

    @Override
    public UserLessonResponseDto changeStatus(UserLessonRequestDto lessonDto){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName()).orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { User.class.getName(), authentication.getName() }, Locale.getDefault())));

        UserLesson userLesson = userLessonRepository.findByUserIdAndLessonId(user.getId(), lessonDto.getLessonId())
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(JOIN_RESOURCE_NOT_FOUND.name(),
                        new Object[] { UserLesson.class.getName(),lessonDto.getLessonId(), user.getId() }, Locale.getDefault())));

        if(userLesson.getStatus().equals(Status.STARTED) && lessonDto.getStatus().equals(Status.FINALIZED)){
            userCourseService.updateProgress(userLesson.getLesson().getCourse());
        }
        userLesson.setStatus(lessonDto.getStatus());

        return mapper.map(userLessonRepository.save(userLesson), UserLessonResponseDto.class);
    }

    @Override
    public LessonResponseDto create(LessonRequestDto request) {
        return null;
    }

    @Override
    public LessonResponseDto update(Long id, LessonRequestDto request) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
