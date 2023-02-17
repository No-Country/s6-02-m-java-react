package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;

import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final GenericMapper mapper;
    private final UserRepository userRepository;
    private final MessageSource messenger;

    public UserResponseDto getMyUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[]{User.class.getName()}, Locale.getDefault())));
        return mapper.map(user, UserResponseDto.class);
    }

    @Override
    public UserResponseDto update(UserRequestDto requestDto, Long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[]{User.class.getName(), id}, Locale.getDefault())));

        user.setEmail(requestDto.getEmail());
        user.setName(requestDto.getName());
        user.setLastname(requestDto.getLastName());
        user.setPassword(requestDto.getPassword());

        return mapper.map(userRepository.save(user), UserResponseDto.class);
    }

    @Override
    public void delete(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.delete(user);
    }

    @Override
    public List<UserResponseDto> findAll() {
        return mapper.mapAll(userRepository.findAll(), UserResponseDto.class);
    }

    @Override
    public UserResponseDto findById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                        new Object[]{User.class.getName(), id}, Locale.getDefault())));
        return mapper.map(user, UserResponseDto.class);
    }

}
