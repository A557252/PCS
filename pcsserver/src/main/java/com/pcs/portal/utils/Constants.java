package com.pcs.portal.utils;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.tomcat.jni.File;


public interface Constants {
	public static String SUCCESS_STATUS = "{\"Status\" : true ,";
    public static String FAILURE_STATUS = "{\"Status\" : false ,";
    public static String LOGIN_SUCCESS = "\"Message\" : \"Login Successful\"}";
    public static String LOGIN_FAILURE = "\"Message\" : \"Login Failed. Wrong Credentials\"}";
    public static String LOGIN_FAILURE_NO_USER = "\"Message\" : \"Login Failed. No such User present\"}";
    public static String LOGOUT_SUCCESS = "\"Message\" : \"Logout Successful\"}";
    public static String LOGOUT_FAIL = "\"Message\" : \"Logout Failed\"}";
    public static String INSERTED_SUCCESS = "\"Message\" : \"Added Successfully\"}";
    public static String INSERTED_FAILURE = "\"Message\" : \"Addition Failed\"}";
    public static String UPDATED_SUCCESS = "\"Message\" : \"Updated Successfully\"}";
    public static String UPDATED_FAILURE = "\"Message\" : \"Updation Failed\"}";
    public static String DELETED_SUCCESS = "\"Message\" : \"Deleted Successful\"}";
    public static String DELETED_FAILURE = "\"Message\" : \"Deletion Failed\"}";
    public static String GET_SUCCESS = "\"Message\" : \"Fetched Successful\"}";
    public static String GET_FAILURE = "\"Message\" : \"Fetching Failed\"}";
    
    //initially trying with local
	public static final Path ROOTFILE_LOCATION=Paths.get(new java.io.File("").getAbsolutePath()+"\\temp_upload");
	
	//FTP DETAILS
	public static final String USER_NAME="pcsuser";
	public static final String PASSWORD="Atos123";
	public static final int PORT=22;
	public static final String HOST="nlsivm758.sdmc.ao-srv.com";
	public static final String HOME_LOCATION_KLM_PCS="/home/fsdspcsa/pcs/klm";
	
}
