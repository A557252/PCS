package com.pcs.portal.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pcs.portal.model.ApiResponse;
import com.pcs.portal.model.FileResponse;
import com.pcs.portal.service.IncraImport;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/wizards")
public class FileController {
	
	@Autowired
	IncraImport incraImport;

	@Transactional
	@PostMapping("/incraupload")
	public ApiResponse<Void> uploadFile(@RequestParam("incraFile") MultipartFile incrafile,
			@RequestParam("remarks") String remarks,
			@RequestParam("schedule") String schedule,
			@RequestParam("job") String job,
			@RequestParam("idFetc") String id
			){
		if(incrafile.getOriginalFilename().substring(incrafile.getOriginalFilename().lastIndexOf('.')+1).contentEquals("dat")) {
			boolean result=incraImport.StoreIncraFile(incrafile,id);
			if(result) {
			FileResponse fileParameters=incraImport.makeEntryDb(incrafile);
			System.out.println(fileParameters.getParameter());
			incraImport.saveIntoBatchScheduling(job, fileParameters.getParameter(), remarks);
			return new ApiResponse<>(HttpStatus.OK.value(),"parameter",fileParameters);
		}
		else {
			return new ApiResponse<>(401, "failure",new String("file format not supported"));
		}
			}else {
				return new ApiResponse<>(401, "failure",new String("cannot store file"));
			}
	}
	
	@Transactional
	@PostMapping("/incraGetParameters")
	public ApiResponse<Void> getParameter(@RequestParam("incraFile") MultipartFile incrafile){
			if(incrafile.getOriginalFilename().substring(incrafile.getOriginalFilename().lastIndexOf('.')+1).contentEquals("dat")) {
			FileResponse fileParameters=incraImport.makeEntryDb(incrafile);
			fileParameters.setId(incraImport.StoreIncraFileTemp(incrafile));
			return new ApiResponse<>(HttpStatus.OK.value(),"parameter",fileParameters);
		}
		else {
			return new ApiResponse<>(401, "failure",new String("file format not supported"));
		}
	}
}
