package com.pcs.portal.service.impl;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.sql.Date;

import javax.transaction.Transactional;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pcs.portal.dao.FsdBatchSchedulingDao;
import com.pcs.portal.model.FileResponse;
import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.service.IncraImport;
import com.pcs.portal.utils.Constants;
import com.pcs.portal.utils.FTPUtility;
import com.sun.jmx.snmp.Timestamp;

@Service
public class IncraImportImpl implements IncraImport {

	protected final Log logger = LogFactory.getLog(getClass());
	
	@Autowired
	private FsdBatchSchedulingDao fsdBatchSchedulingdao;
	
	@Transactional
	@Override
	public boolean storeIncraFile(String incraFile,String id) {
		try {		
		new FTPUtility(incraFile,id);
		logger.info("deleting temp file..."+incraFile+"&"+id);
	    File f1=new File(Constants.ROOTFILE_LOCATION+Constants.PATH_DELIMETER+incraFile+"&"+id);
		if(f1.delete()) {
			return true;
		}
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	@Override
	public FileResponse makeEntryDb(MultipartFile incraFile,String filename) {
		String fileName=filename;
		String line;
		String parameters="";
		String fileType="";
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
				}else if(dataArray[0].contentEquals("D")) {
					parameters= "'"+fileName+"','"+dataArray[1]+"','"+dataArray[2]+"'";
					fileType="D";
				}else {
					return new FileResponse(Constants.ERROR, "");
				}
			}
			
			return new FileResponse(parameters, fileType);
			
		} catch (IOException e) {
			return new FileResponse(Constants.ERROR, "");
		}
	}

	@Override
	public boolean saveIntoBatchScheduling(String name,String parameters,String remarks) {
		FsdBatchScheduling fsd=new FsdBatchScheduling();
		fsd.setId(fsdBatchSchedulingdao.getNextValue());
		fsd.setName(name);
		fsd.setParameters(parameters);
		fsd.setRemarks(remarks);
		fsd.setScheduleDate(new Date(System.currentTimeMillis()-4*60*60*1000+30*60*1000));
		fsd.setDateCreated(new Date(System.currentTimeMillis()-4*60*60*1000+30*60*1000));
		fsd.setDateModified(new Date(System.currentTimeMillis()-4*60*60*1000+30*60*1000));
		fsd.setUserCreated("pcs_o");
		fsd.setUserModified("pcs_o");
		fsdBatchSchedulingdao.save(fsd);
		return true;
	}

	@Override
	public String storeIncraFileTemp(MultipartFile incraFile) {
		long n = new Timestamp().getDateTime();
		try {
			Files.copy(incraFile.getInputStream(), com.pcs.portal.utils.Constants.ROOTFILE_LOCATION.resolve(incraFile.getOriginalFilename()+"&"+n));
		} catch (IOException e) {
			return Constants.ERROR;
		}
		return Long.toString(n);
	}	
}