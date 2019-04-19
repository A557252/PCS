package com.pcs.portal.service;

import java.util.List;

import com.pcs.portal.model.User;
import com.pcs.portal.model.UserDto;

public interface UserService {

    List<User> findAll();
    User findOne(String username);
}