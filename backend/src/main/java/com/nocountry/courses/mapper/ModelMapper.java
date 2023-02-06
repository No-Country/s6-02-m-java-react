package com.nocountry.courses.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ModelMapper {
    
    private final org.modelmapper.ModelMapper mapper;

    public <R, S> R map(S source, Class<R> destinationClass){
        return mapper.map(source, destinationClass);
    }

    /*public <R, S> List<R> map(List<S> source, Class<R> destinationClass){
        return mapper.typeMap(null, null)
    }*/
}
