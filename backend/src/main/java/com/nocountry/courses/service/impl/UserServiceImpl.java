package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.request.UserRequestDto;
import com.nocountry.courses.dto.response.UserResponseDto;
import com.nocountry.courses.handler.exception.ResourceNotFoundException;
import com.nocountry.courses.mapper.GenericMapper;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
import java.util.List;
=======
import static com.nocountry.courses.model.enums.EMessageCode.RESOURCE_NOT_FOUND;

>>>>>>> dev

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final GenericMapper mapper;
    private final UserRepository userRepository;

<<<<<<< HEAD
    public UserResponseDto getMyUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.findByEmail(authentication.getName()).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return mapper.map(user, UserResponseDto.class);
    }

=======
    private final MessageSource messenger;
>>>>>>> dev
    @Override
    public UserResponseDto update(UserRequestDto requestDto, Long id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = this.userRepository.findByEmail(authentication.getName()).orElseThrow(() -> new ResourceNotFoundException("User not found"));

        user.setEmail(requestDto.getEmail());
        user.setName(requestDto.getName());
        user.setLastname(requestDto.getLastName());
        user.setPassword(requestDto.getPassword());

        return mapper.map(userRepository.save(user), UserResponseDto.class);
    }

    @Override
<<<<<<< HEAD
    public void delete(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("User not found"));
        userRepository.delete(user);
=======
    public void delete(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { User.class.getName(), id }, Locale.getDefault())));
        userRepository.deleteById(id);
>>>>>>> dev
    }

    @Override
    public List<UserResponseDto> findAll() {
        return mapper.mapAll(userRepository.findAll(), UserResponseDto.class);
    }

    @Override
    public UserResponseDto findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { User.class.getName(), id }, Locale.getDefault())));
        return mapper.map(user, UserResponseDto.class);
    }
<<<<<<< HEAD
=======

    @Override
    public UserResponseDto update(Long id, UserRequestDto request) {
        User userFound = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(messenger.getMessage(RESOURCE_NOT_FOUND.name(),
                new Object[] { User.class.getName(), id }, Locale.getDefault())));
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
>>>>>>> dev
}
