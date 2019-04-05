package com.pcs.portal.service;

import java.util.List;

import com.pcs.portal.model.User;
import com.pcs.portal.model.UserDto;

public interface UserService {

    User save(UserDto user);
    List<User> findAll();
    void delete(int id);

    User findOne(String username);

    User findById(int id);

    UserDto update(UserDto userDto);
}
