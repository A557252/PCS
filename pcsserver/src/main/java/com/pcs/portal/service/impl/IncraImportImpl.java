package com.pcs.portal.service.impl;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pcs.portal.dao.FSD_Batch_SchedulingDao;
import com.pcs.portal.model.FileResponse;
import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.service.IncraImport;
import com.pcs.portal.utils.Constants;
import com.pcs.portal.utils.FTPUtility;
import com.sun.jmx.snmp.Timestamp;

@Service
public class IncraImportImpl implements IncraImport {

	@Autowired
	private FSD_Batch_SchedulingDao fsdBatchSchedulingdao;
	
	@Transactional
	@Override
	public boolean StoreIncraFile(String incraFile,String id) {
		try {		
		new FTPUtility(incraFile,id);
		System.out.println("deleting temp file..."+incraFile+"&"+id);
	    File f1=new File(Constants.ROOTFILE_LOCATION+"\\"+incraFile+"&"+id);
		if(f1.delete()) {
			return true;
		}
		} catch (Exception e) {
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
			
		} catch (IOException e) {
			return new FileResponse("error", "");
		}
	}

	@Override
	public boolean saveIntoBatchScheduling(String name,String parameters,String remarks) {
		FsdBatchScheduling fsd=new FsdBatchScheduling();
		fsd.setId(fsdBatchSchedulingdao.getNextValue());
		fsd.setName(name);
		fsd.setParameters(parameters);
		fsd.setRemarks(remarks);
		fsd.setSchedule_date(new Date(System.currentTimeMillis()-11*60*60*1000));
		fsd.setDate_created(new Date(System.currentTimeMillis()-11*60*60*1000));
		fsd.setDate_modified(new Date(System.currentTimeMillis()-11*60*60*1000));
		fsd.setUser_created("pcs_o");
		fsd.setUser_modified("pcs_o");
		fsdBatchSchedulingdao.save(fsd);
		return true;
	}

	@Override
	public String StoreIncraFileTemp(MultipartFile incraFile) {
		long n = new Timestamp().getDateTime();
		try {
			Files.copy(incraFile.getInputStream(), com.pcs.portal.utils.Constants.ROOTFILE_LOCATION.resolve(incraFile.getOriginalFilename()+"&"+n));
		} catch (IOException e) {
		}
		return Long.toString(n);
	}

	
}