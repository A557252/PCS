package com.pcs.portal.utils;

import java.io.File;
import java.io.FileInputStream;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

public class FTPUtility {

	protected final Log logger = LogFactory.getLog(getClass());
	
	JSch jsch ;
	public FTPUtility(String file,String id){	
		try {
		jsch = new JSch();
	    Session session = jsch.getSession(Constants.USER_NAME, Constants.HOST, Constants.PORT);
	    session.setConfig("StrictHostKeyChecking", "no");
	    session.setPassword(Constants.PASSWORD);
	    session.connect();
	    logger.info("Connection established.");
	    logger.info("Creating SFTP Channel.");
	    
	    Channel channel=session.openChannel("sftp");
	    channel.connect();
	    ChannelSftp channelSftp=(ChannelSftp) channel;
	    channelSftp.cd(Constants.HOME_LOCATION_KLM_PCS);

	    File f1=new File(Constants.ROOTFILE_LOCATION+Constants.PATH_DELIMETER+file+"&"+id);
	    channelSftp.put(new FileInputStream(f1),file);
	    channelSftp.exit();
	    session.disconnect();
		}catch (Exception e) {

		}
	}
}