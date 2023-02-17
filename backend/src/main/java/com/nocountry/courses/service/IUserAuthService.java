package com.nocountry.courses.service;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;

public interface IUserAuthService extends ICrudService<UserResponseDto, UserRequestDto> {
}
