package com.nocountry.courses.service;

import com.nocountry.courses.dto.request.NoteRequestDto;
import com.nocountry.courses.dto.response.NoteResponseDto;

import java.util.List;

public interface INoteService extends ICrudService<NoteResponseDto, NoteRequestDto> {

    List<NoteResponseDto> findAllByUserId();
}
