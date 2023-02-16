package com.nocountry.courses.service;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import org.springframework.data.crossstore.ChangeSetPersister;

import java.util.List;

public interface IUserService {

    UserResponseDto update(UserRequestDto requestDto, Long id);

    void delete(String email);

    List<UserResponseDto> findAll();

    UserResponseDto findById(Long id);
}
