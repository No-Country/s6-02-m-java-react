package com.nocountry.courses.service;

import com.nocountry.courses.model.FavouriteList;
import com.nocountry.courses.model.User;

import java.util.List;

public interface IFavouriteListService {

    void createFavouritelist(FavouriteList favouriteList);

    List<FavouriteList> readFavouriteList(User user);

    List<FavouriteList> getFavouriteListFOrUser(User user);
}
