package com.nocountry.courses.service.impl;

import com.nocountry.courses.dto.response.CourseResponseDto;
import com.nocountry.courses.model.FavouriteList;
import com.nocountry.courses.model.User;
import com.nocountry.courses.repository.FavouriteListRepository;
import com.nocountry.courses.repository.UserRepository;
import com.nocountry.courses.service.IFavouriteListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavouriteListServiceImpl implements IFavouriteListService {

    @Autowired
    FavouriteListRepository favouriteListRepository;
    FavouriteListServiceImpl favouriteListService;
    @Autowired
    private UserRepository userRepository;

    @Override
    public void createFavouritelist(FavouriteList favouriteList) {
        favouriteListRepository.save(favouriteList);
    }

    @Override
    public List<FavouriteList> readFavouriteList(User user) {
        return favouriteListRepository.findAll();
    }

    @Override
    public List<FavouriteList> getFavouriteListFOrUser(User user) {
        final List<FavouriteList> favouriteLists = favouriteListRepository.findAllByUserOrderByCreatedDateDesc(user);
        List<CourseResponseDto> courseResponseDtoList = new ArrayList<>();
        for (FavouriteList favouriteList: favouriteLists) {
            favouriteLists.add((FavouriteList) favouriteListService.getFavouriteListFOrUser(favouriteList.getUser()));
        }
        return favouriteLists;
    }
}
