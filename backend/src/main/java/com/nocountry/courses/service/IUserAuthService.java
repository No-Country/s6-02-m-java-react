package com.nocountry.courses.service;

import com.nocountry.courses.dto.user.LoginDto;
import com.nocountry.courses.dto.user.RegisterDto;

public interface IUserAuthService extends ICrudService<LoginDto, RegisterDto> {
}
