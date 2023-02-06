package com.nocountry.courses.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
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

    private final ModelMapper mapper;
    private final UserRepository repository;

    @Override
    public UserResponseDto create(UserRequestDto request) {
        User user = mapper.map(request, User.class);

        user.setPassword("encoder.encode(request.getPassword)");
        //repositor.save(user);

        return mapper.map(repository.save(user), UserResponseDto.class);
    }

    @Override
    public void delete(Long id) {
        
    }

    @Override
    public List<UserResponseDto> findAll() {
        
        return null;
    }

    @Override
    public UserResponseDto findById(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public UserResponseDto update(UserRequestDto request) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public boolean authenticate(String username) {
        // TODO Auto-generated method stub
        return false;
    }
    

}

