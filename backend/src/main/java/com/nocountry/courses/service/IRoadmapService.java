package com.nocountry.courses.service;

import com.nocountry.courses.dto.request.RoadmapRequestDto;
import com.nocountry.courses.dto.response.RoadmapResponseDto;
import com.nocountry.courses.model.Roadmap;
import com.nocountry.courses.model.User;

import java.util.List;

public interface IRoadmapService extends ICrudService<RoadmapResponseDto, RoadmapRequestDto> {

    List<RoadmapResponseDto> findAllByUserId(Long id);
}
