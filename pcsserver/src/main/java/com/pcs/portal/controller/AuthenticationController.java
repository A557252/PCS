package com.pcs.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import com.pcs.portal.config.JwtTokenUtil;
import com.pcs.portal.model.*;
import com.pcs.portal.service.UserService;
import com.pcs.portal.utils.Constants;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;


    @PostMapping(value = "/login")
    public ApiResponse<AuthToken> register(@RequestBody LoginUser loginUser) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getUsername(), loginUser.getPassword()));        
        final User user = userService.findOne(loginUser.getUsername());
        if(user.getEnvironment().equalsIgnoreCase(loginUser.getEnvironment())) {
        final String token = jwtTokenUtil.generateToken(user);
        return new ApiResponse<>(200, Constants.SUCCESS,new AuthToken(token, user.getUsername()));
        }else {
        	//user environment not equal
        	return new ApiResponse<>(401, Constants.FAILURE,Constants.AUTHENTICATION_ERROR);
        }
    }
    
}
