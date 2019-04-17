package com.pcs.portal.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

public class FTPUtility {

	JSch jsch ;
	public FTPUtility(MultipartFile file,String id){	
		try {
		jsch = new JSch();
	    System.out.println("Connection established.");
	    Session session = jsch.getSession(Constants.USER_NAME, Constants.HOST, Constants.PORT);
	    session.setConfig("StrictHostKeyChecking", "no");
	    session.setPassword(Constants.PASSWORD);
	    session.connect();
	    System.out.println("Connection established.");
	    System.out.println("Creating SFTP Channel.");
	    
	    Channel channel=session.openChannel("sftp");
	    channel.connect();
	    ChannelSftp channelSftp=(ChannelSftp) channel;
	    channelSftp.cd(Constants.HOME_LOCATION_KLM_PCS);
	    //converting multipart file to file
	    //File f1=new File(Constants.ROOTFILE_LOCATION+"\\"+file.getOriginalFilename());
	    File f1=new File(Constants.ROOTFILE_LOCATION+"\\"+file.getOriginalFilename()+"&"+id);
//	    file.transferTo(f1);
//	    File f1=FTPUtility.multipartToFile(file);
	    channelSftp.put(new FileInputStream(f1),file.getOriginalFilename());
	    channelSftp.exit();
	    session.disconnect();
		System.out.println("connection done");
		}catch (Exception e) {

		}
	}
	
	public static File multipartToFile(MultipartFile multipart) 
	{try {
	    File convFile = new File( multipart.getOriginalFilename());
	    multipart.transferTo(convFile);
	    return convFile;
	}catch (IOException e) {
	}
	return null;
	}
}
