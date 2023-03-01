package com.nocountry.courses.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDto {

    private String name;
    private String lastname;
    private String email;
    private String password;
}
