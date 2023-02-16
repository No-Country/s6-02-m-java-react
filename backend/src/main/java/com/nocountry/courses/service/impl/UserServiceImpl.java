package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final GenericMapper mapper;
    private final UserRepository userRepository;

    @Override
    public UserResponseDto update(UserRequestDto requestDto, Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));

        user.setEmail(requestDto.getEmail());
        user.setName(requestDto.getName());
        user.setLastname(requestDto.getLastName());
        user.setPassword(requestDto.getPassword());

        return mapper.map(userRepository.save(user), UserResponseDto.class);
    }

    @Override
    public void delete(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.delete(user);
    }

    @Override
    public List<UserResponseDto> findAll() {
        return mapper.mapAll(userRepository.findAll(), UserResponseDto.class);
    }

    @Override
    public UserResponseDto findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return mapper.map(user, UserResponseDto.class);
    }
}
