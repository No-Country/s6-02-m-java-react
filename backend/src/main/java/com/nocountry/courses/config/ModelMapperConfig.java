package com.nocountry.courses.config;

import org.modelmapper.ModelMapper;
import static org.modelmapper.convention.MatchingStrategies.STRICT;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
    ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(STRICT);
        return mapper;
    }
}
