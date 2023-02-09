package com.nocountry.courses.controller;

import com.nocountry.courses.model.Course;
import com.nocountry.courses.model.FavouriteList;
import com.nocountry.courses.model.User;
import com.nocountry.courses.service.IFavouriteListService;
import com.nocountry.courses.service.impl.AuthService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.List;


@RestController
@RequestMapping("/favourites")
public record FavouriteListController(IFavouriteListService favouriteListService, AuthService authService) {

    @PostMapping("/add")
    public ResponseEntity<List<Course>> addCourseToFavouriteList(@RequestBody Course course, @RequestParam("token") String token) throws AuthenticationException {
        authService.authenticate(token);
        User user = authService.getUser(token);
        FavouriteList favouriteList = new FavouriteList(user, course);
        favouriteListService.createFavouritelist(favouriteList);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{token}")
    public ResponseEntity<List<FavouriteList>> getWishList(@PathVariable("token") String token) throws AuthenticationException {
        authService.authenticate(token);

        User user = authService.getUser(token);

        List<FavouriteList> courseDto = favouriteListService.getFavouriteListFOrUser(user);

        return new ResponseEntity<List<FavouriteList>>(courseDto, HttpStatus.OK);

    }

        //delete course from favourite list
}
