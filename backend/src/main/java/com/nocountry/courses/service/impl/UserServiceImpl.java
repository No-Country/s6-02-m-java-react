package com.nocountry.courses.service.impl;

import java.util.*;

import com.nocountry.courses.dto.user.LoginDto;
import com.nocountry.courses.handler.exception.ResourceAlreadyExistsException;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.User;
import com.nocountry.courses.model.UserRole;
import com.nocountry.courses.repository.RoleRepository;
import com.nocountry.courses.security.PasswordEncoder;
import com.nocountry.courses.service.IUserAuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nocountry.courses.dto.user.RegisterDto;
import com.nocountry.courses.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements IUserAuthService {

    private GenericMapper mapper;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private RoleRepository roleRepository;

    @Autowired
    public UserServiceImpl(GenericMapper mapper,
                           UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           RoleRepository roleRepository) {
        this.mapper = mapper;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    @Override
    public LoginDto create(RegisterDto request) {
        User user = mapper.map(request, User.class);
        if(userRepository.existsByUsername(request.getEmail())){
            throw new ResourceAlreadyExistsException("User already exists");
        }

        user.setEmail(request.getEmail());
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.bCryptPasswordEncoder().encode(request.getPassword()));

        UserRole roles = roleRepository.findByName("USER").get();
        user.setRoles(Collections.singletonList(roles));

        return mapper.map(userRepository.save(user), LoginDto.class);
    }

    @Override
    public void delete(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.deleteById(id);
    }

    @Override
    public List<LoginDto> findAll() {
        List<User> users = userRepository.findAll();
        return mapper.mapAll(users, LoginDto.class);
    }

    @Override
    public LoginDto findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return mapper.map(user, LoginDto.class);
    }

    @Override
    public LoginDto update(Long id, RegisterDto request) {
        User userFound = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userFound.setUsername(request.getUsername());
        userFound.setEmail(request.getEmail());
        userFound.setPassword(request.getPassword());
        return mapper.map(userFound, LoginDto.class);
    }
}

