package com.pcs.portal.service;

import java.util.List;

import com.pcs.portal.model.User;

public interface UserService {

    List<User> findAll();
    User findOne(String username);
}