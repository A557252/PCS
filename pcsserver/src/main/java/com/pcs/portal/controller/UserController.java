package com.pcs.portal.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.pcs.portal.model.ApiResponse;
import com.pcs.portal.model.AuthToken;
import com.pcs.portal.utils.Constants;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {

	@GetMapping("/checklogin")
    public ApiResponse<AuthToken> checklogin() {
		return new ApiResponse<>(HttpStatus.OK.value(),Constants.PARAMETER,true);
	}
}