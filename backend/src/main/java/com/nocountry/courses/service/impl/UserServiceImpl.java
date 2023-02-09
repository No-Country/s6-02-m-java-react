package com.nocountry.courses.service.impl;

import java.util.*;

import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import org.springframework.stereotype.Service;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IUserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService  {

    private final GenericMapper mapper;
    private final UserRepository userRepository;

    @Override
    public UserResponseDto create(UserRequestDto request) {
        User user = mapper.map(request, User.class);
        if (Objects.nonNull(userRepository.findByEmail(request.getEmail()))) {
            //Change the exception
            throw new ResourceNotFoundException("User already exists");
        }
        return mapper.map(userRepository.save(user), UserResponseDto.class);
    }

    @Override
    public void delete(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.deleteById(id);
    }

    @Override
    public List<UserResponseDto> findAll() {
        List<User> users = userRepository.findAll();
        return Collections.singletonList(mapper.map(users, UserResponseDto.class));
    }

    @Override
    public UserResponseDto findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return mapper.map(user, UserResponseDto.class);
    }

    @Override
    public UserResponseDto update(Long id, UserRequestDto request) {
        User userFound = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userFound.setName(request.getName());
        userFound.setEmail(request.getEmail());
        userFound.setPassword(request.getPassword());
        return mapper.map(userFound, UserResponseDto.class);
    }

    @Override
    public boolean authenticate(String username) {
        // TODO Auto-generated method stub
        return false;
    }
}

