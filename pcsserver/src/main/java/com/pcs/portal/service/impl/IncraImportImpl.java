package com.pcs.portal.service.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pcs.portal.dao.FSD_Batch_SchedulingDao;
import com.pcs.portal.model.FileResponse;
import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.service.IncraImport;

@Service
public class IncraImportImpl implements IncraImport {

	@Autowired
	private FSD_Batch_SchedulingDao fsdBatchSchedulingdao;
	
	@Override
	public boolean StoreIncraFile(MultipartFile incraFile) {
		try {
			Files.copy(incraFile.getInputStream(), com.pcs.portal.utils.Constants.ROOTFILE_LOCATION.resolve(incraFile.getOriginalFilename()));
		} catch (IOException e) {
			return false;
		}
		return true;
	}

	@Override
	public FileResponse makeEntryDb(MultipartFile incraFile) {
		String fileName=incraFile.getOriginalFilename();
		String line;
		String parameters="";
		String fileType="";
		FsdBatchScheduling fsdBatchScheduling;
		InputStream readFile;
		try {
			readFile = incraFile.getInputStream();
		
			BufferedReader readBuffLine=new BufferedReader(new InputStreamReader(readFile));
			if((line=readBuffLine.readLine())!=null) {
				//parameter value calculation
				String dataArray[]=line.trim().split(" ");
				if(dataArray[0].contentEquals("C")) {
					parameters= "'"+fileName+"','"+"','"+"'";
					fileType="C";
				}if(dataArray[0].contentEquals("D")) {
					parameters= "'"+fileName+"','"+dataArray[1]+"','"+dataArray[2]+"'";
					fileType="D";
				}
			}
			
			return new FileResponse(parameters, fileType);
			
		} catch (IOException e) {}
		return new FileResponse("error", "");
	}

	
}