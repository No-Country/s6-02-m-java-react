package com.nocountry.courses.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class UserRequestDto {
    
    @NotBlank
    private String name;
    @NotBlank
    private String email;
    @NotBlank
    private String password;

}
