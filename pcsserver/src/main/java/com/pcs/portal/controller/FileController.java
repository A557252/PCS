package com.pcs.portal.controller;

import java.io.File;

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
import com.pcs.portal.utils.Constants;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/wizards")
public class FileController {
	
	@Autowired
	IncraImport incraImport;

	@Transactional
	@PostMapping("/incraupload")
	public ApiResponse<Void> uploadFile(@RequestParam("incraFile") String incrafile,
			@RequestParam("remarks") String remarks,
			@RequestParam("schedule") String schedule,
			@RequestParam("job") String job,
			@RequestParam("idFetc") String id,
			@RequestParam("parameters") String parameters
			){
		if(incrafile.substring(incrafile.lastIndexOf('.')+1).contentEquals("dat")) {
			boolean result=incraImport.storeIncraFile(incrafile,id);
			if(result) {
			incraImport.saveIntoBatchScheduling(job, parameters, remarks);
			return new ApiResponse<>(HttpStatus.OK.value(),Constants.PARAMETER,parameters);
		}
		else {
			return new ApiResponse<>(401, Constants.FAILURE,Constants.FILEFORMATNOTSUPPORTED);
		}
			}else {
				return new ApiResponse<>(401, Constants.FAILURE,Constants.CANNOTSTOREFILE);
			}
	}
	
	@Transactional
	@PostMapping("/incraGetParameters")
	public ApiResponse<Void> getParameter(@RequestParam("incraFile") MultipartFile incrafile){
		if(incrafile.getOriginalFilename().substring(incrafile.getOriginalFilename().lastIndexOf('.')+1).contentEquals("dat")) {
			FileResponse fileParameters=incraImport.makeEntryDb(incrafile);
		if(fileParameters.getParameter().equalsIgnoreCase("error")) {
			return new ApiResponse<>(401, Constants.FAILURE,Constants.EMPTYFILE);
		}else {
			fileParameters.setId(incraImport.storeIncraFileTemp(incrafile));
			return new ApiResponse<>(HttpStatus.OK.value(),Constants.PARAMETER,fileParameters);
		}
		}
		else {
			return new ApiResponse<>(401, Constants.FAILURE,Constants.FILEFORMATNOTSUPPORTED);
		}
	}
	
	@PostMapping("/deleteincra")
	public ApiResponse<Void> deleteUploadedFile(@RequestParam("incraFile") String incrafile,@RequestParam("idFetc") String id){
	    File f1=new File(Constants.ROOTFILE_LOCATION+Constants.PATH_DELIMETER+incrafile+"&"+id);
		if(f1.delete()) 
			return new ApiResponse<>(HttpStatus.OK.value(),Constants.PARAMETER,Constants.SUCCESS);
		else
			return new ApiResponse<>(401, Constants.FAILURE,Constants.FAILURE);
		
	}
	
	
}
