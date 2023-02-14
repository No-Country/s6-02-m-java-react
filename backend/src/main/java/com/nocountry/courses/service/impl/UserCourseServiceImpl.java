package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.UserCourseRequestDto;
import com.nocountry.courses.dto.response.UserCourseResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Course;
import com.nocountry.courses.model.UserCourse;
import com.nocountry.courses.model.enums.CourseStatus;
import com.nocountry.courses.repository.CourseRepository;
import com.nocountry.courses.repository.UserCourseRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IUserCourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements IUserCourseService {

    private final UserCourseRepository repository;

    private final CourseRepository courseRepository;

    private final UserRepository userRepository;
    private final GenericMapper mapper;

    @Override
    public UserCourseResponseDto create(UserCourseRequestDto request) {
        UserCourse userCourse =  mapper.map(request, UserCourse.class);
        Long userId = getUserId();

        userCourse.setUser(userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("")));
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
                        .course(courseRepository.findById(courseId).orElseThrow(()-> new ResourceNotFoundException("")))
                        .user(userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("")))
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
    public UserCourseResponseDto updateProgress(Long courseId, double progress) {
        Long userId = getUserId();
        UserCourse userCourse =  repository.getByUserAndCourse(userId,courseId)
                .orElse(UserCourse.builder()
                        .course(Course.builder().id(courseId).build())//TODO
                        .user(userRepository.findById(userId).orElseThrow(()-> new ResourceNotFoundException("")))
                        .status(CourseStatus.InProgress)
                        .build());

        userCourse.setProgress(progress);

        if(userCourse.getCourse().getLessons().size()<=progress){
            userCourse.setStatus(CourseStatus.Completed);
        }
        return mapper.map(repository.save(userCourse),UserCourseResponseDto.class);
    }

    public Long getUserId(){
        return 1L;
    }

    @Override
    public UserCourseResponseDto findByCourse(Long courseId) {
        Long userId = getUserId();
        UserCourse userCourse = repository.getByUserAndCourse(userId,courseId).orElseThrow(()-> new ResourceNotFoundException(""));

        return mapper.map(userCourse,UserCourseResponseDto.class);
    }

    @Override
    public UserCourseResponseDto findById(Long id) {
        return null;
    }
}
