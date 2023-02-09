package com.nocountry.courses.service;

import org.springframework.data.crossstore.ChangeSetPersister;

import java.util.List;

public interface ICrudService <R, D>{
    
    R create(D request);

    R update(Long id,D request);

    void delete(Long id) throws ChangeSetPersister.NotFoundException;

    List<R> findAll();
    
    R findById(Long id);
}
