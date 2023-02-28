package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.BasicCourseResponseDto;
import com.nocountry.courses.dto.response.CourseResponseDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.Course;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.CourseRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.ICourseService;
import com.nocountry.courses.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final GenericMapper mapper;
    private final UserRepository userRepository;
    private final MessageSource messenger;
    private final CourseRepository courseRepository;
    private final PasswordEncoder passwordEncoder;

    public User getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return this.userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[]{User.class.getName()}, Locale.getDefault())));
    }

    public UserResponseDto getMyUser() {
        return mapper.map(getUser(), UserResponseDto.class);
    }

    @Override
    public UserResponseDto update(UserRequestDto requestDto, Long id) {
        User user = getUser();

        user.setEmail(requestDto.getEmail());
        user.setName(requestDto.getName());
        user.setLastname(requestDto.getLastname());
        if(requestDto.getPassword() != null && !requestDto.getPassword().equals(""))
            user.setPassword(passwordEncoder.encode(requestDto.getPassword()));

        return mapper.map(userRepository.save(user), UserResponseDto.class);
    }

    @Override
    public void delete(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.delete(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[]{User.class.getName(), id}, Locale.getDefault())));
        return user;
    }

    @Override
    public List<BasicCourseResponseDto> addFavouriteCourseToUser(Long course_id) {
        User user = getUser();
        Course course =  courseRepository.findById(course_id).get();
        user.getIdCourses().add(course.getId());
        userRepository.save(user);

        return courseRepository.findAllById(user.getIdCourses())
                .stream()
                .map(courseStream -> new BasicCourseResponseDto(courseStream.getTitle()))
                .collect(Collectors.toList());
    }
}
