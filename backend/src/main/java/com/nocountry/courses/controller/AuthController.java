package com.nocountry.courses.controller;

import com.nocountry.courses.dto.user.AuthResponseDto;
import com.nocountry.courses.dto.user.LoginDto;
import com.nocountry.courses.dto.user.RegisterDto;
import com.nocountry.courses.repository.RoleRepository;
import com.nocountry.courses.security.JwtGenerator;
import com.nocountry.courses.security.PasswordEncoder;
import com.nocountry.courses.service.impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public record AuthController (AuthenticationManager authenticationManager, UserServiceImpl userService,
                             RoleRepository roleRepository, PasswordEncoder passwordEncoder, JwtGenerator jwtGenerator) {

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDto registerDto){
        if(registerDto.getEmail().equals(" ")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        userService.create(registerDto);
        return ResponseEntity.ok("User register success!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDto> login(@RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(),
                        loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponseDto(token), HttpStatus.OK);
    }
}
