package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.UserCourseRequestDto;
import com.nocountry.courses.dto.response.UserCourseResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Course;
import com.nocountry.courses.model.User;
import com.nocountry.courses.model.UserCourse;
import com.nocountry.courses.model.enums.CourseStatus;
import com.nocountry.courses.repository.UserCourseRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IUserCourseService;
import com.nocountry.courses.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

import static com.nocountry.courses.model.enums.EMessageCode.JOIN_RESOURCE_NOT_FOUND;
import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements IUserCourseService {

    private final UserCourseRepository repository;
    private final UserRepository userRepository;

    private final IUserService userService;
    private final GenericMapper mapper;
    private final MessageSource messenger;

    @Override
    public UserCourseResponseDto create(UserCourseRequestDto request) {
        UserCourse userCourse =  mapper.map(request, UserCourse.class);
        Long userId = getUserId();

        userCourse.setUser(userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { User.class.getName(), userId }, Locale.getDefault()))));
        userCourse.setStatus(CourseStatus.InProgress);
        if(userCourse.getProgress()==null)
            userCourse.setProgress(Double.valueOf(0));

        return mapper.map(repository.save(userCourse),UserCourseResponseDto.class);
    }

    @Override
    public UserCourseResponseDto create(Long courseId) {
        Long userId = getUserId();
        UserCourse userCourse =  repository.getByUserAndCourse(userId,courseId)
                .orElse(UserCourse.builder()
                        .course(Course.builder().id(courseId).build())//.course(courseRepository.findById(courseId).orElseThrow(()-> new ResourceNotFoundException("")))
                        .user(userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                                new Object[] { User.class.getName(), userId }, Locale.getDefault()))))
                        .progress(Double.valueOf(0))
                        .build());

        userCourse.setStatus(CourseStatus.InProgress);

        return mapper.map(repository.save(userCourse),UserCourseResponseDto.class);
    }

    @Override
    public UserCourseResponseDto update(Long id, UserCourseRequestDto request) {
        return null;
    }

    @Override
    public void delete(Long id) throws ChangeSetPersister.NotFoundException {

    }

    @Override
    public List<UserCourseResponseDto> findAll() {
        Long userId = getUserId();

        return mapper.mapAll(repository.findAll(),UserCourseResponseDto.class);
    }

    @Override
    public List<UserCourseResponseDto> findByUser() {
        Long userId = getUserId();
        List <UserCourse> as = repository.getByUser(userId);
        System.out.println(as);

        return mapper.mapAll(repository.getByUser(userId),UserCourseResponseDto.class);
    }

    @Override
    public UserCourseResponseDto updateProgress(Long courseId, Double progress) {
        Long userId = getUserId();
        UserCourse userCourse =  repository.getByUserAndCourse(userId,courseId)
                .orElse(UserCourse.builder()
                        .course(Course.builder().id(courseId).build())
                        .user(userRepository.findById(userId)
                                .orElseThrow(()-> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                                new Object[] { User.class.getName(), userId }, Locale.getDefault()))))
                        .status(CourseStatus.InProgress)
                        .build());

        userCourse.setProgress(progress);

        if(userCourse.getCourse().getLessons().size()<=progress){
            userCourse.setStatus(CourseStatus.Completed);
        }else{
            userCourse.setStatus(CourseStatus.InProgress);
        }
        return mapper.map(repository.save(userCourse),UserCourseResponseDto.class);
    }
    @Override
    public UserCourseResponseDto updateProgress(Course course) {
        Long userId = getUserId();
        UserCourse userCourse =  repository.getByUserAndCourse(userId,course.getId())
                .orElse(UserCourse.builder()
                        .course(course)
                        .user(userRepository.findById(userId)
                                .orElseThrow(()-> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                                new Object[] { User.class.getName(), userId }, Locale.getDefault()))))
                        .status(CourseStatus.InProgress)
                        .build());

        userCourse.setProgress(userCourse.getProgress()+1);

        if(course.getLessons().size()<=userCourse.getProgress()){
            userCourse.setStatus(CourseStatus.Completed);
        }else{
            userCourse.setStatus(CourseStatus.InProgress);
        }
        return mapper.map(repository.save(userCourse),UserCourseResponseDto.class);
    }

    public Long getUserId(){
        return userService.getUser().getId();
    }

    @Override
    public UserCourseResponseDto findByCourse(Long courseId) {
        Long userId = getUserId();
        UserCourse userCourse = repository.getByUserAndCourse(userId,courseId)
                .orElseThrow(()-> new ResourceNotFoundException(messenger.getMessage(JOIN_RESOURCE_NOT_FOUND.name(),
                new Object[] { UserCourse.class.getName(),userId, courseId }, Locale.getDefault())));

        return mapper.map(userCourse,UserCourseResponseDto.class);
    }

    @Override
    public UserCourseResponseDto findById(Long id) {
        return null;
    }
}
