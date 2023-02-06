package com.nocountry.courses.dto.request;

import jakarta.validation.constraints.NotBlank;

public class UserRequestDto {
    
    @NotBlank
    private String name;
    @NotBlank
    private String email;
    @NotBlank
    private String password;

}
