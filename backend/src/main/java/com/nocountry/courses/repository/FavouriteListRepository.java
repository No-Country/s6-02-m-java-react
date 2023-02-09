package com.nocountry.courses.repository;

import com.nocountry.courses.model.FavouriteList;
import com.nocountry.courses.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavouriteListRepository extends JpaRepository<FavouriteList, Long> {

    List<FavouriteList> findAllByUserOrderByCreatedDateDesc(User user);
}
