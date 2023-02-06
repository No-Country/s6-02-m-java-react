package com.nocountry.courses.service;

import java.util.List;

public interface ICrudService <R, D>{
    
    R create(D request);

    R update(D request);

    void delete(Long id);

    List<R> findAll();
    
    R findById(Long id);
}
