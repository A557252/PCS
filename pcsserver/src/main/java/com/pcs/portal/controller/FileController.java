package com.pcs.portal.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pcs.portal.model.ApiResponse;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/file")
public class FileController {

	@PostMapping("/incraupload")
	public ApiResponse<Void> uploadFile(@RequestParam("incraFile") MultipartFile incrafile){
		return new ApiResponse<>(HttpStatus.OK.value(),"file uploaded successfulyl",null);
	}
	@GetMapping("/aa")
	public String sample(){
		return "sample";
	}
	
}
