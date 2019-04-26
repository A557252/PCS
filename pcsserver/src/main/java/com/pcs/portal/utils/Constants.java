package com.pcs.portal.utils;

import java.nio.file.Path;
import java.nio.file.Paths;

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
    public static String AUTHENTICATION_ERROR="{'message':'aunthentication failure'}";
    public static String ERROR="error";
    public static String FAILURE="failure";
    public static String SUCCESS="success";
    public static String FILEFORMATNOTSUPPORTED="file format not supported";
    public static String CANNOTSTOREFILE="cannot store file";
    public static String EMPTYFILE="Empty File";
    public static String PARAMETER="parameter";
    public static String PATH_DELIMETER="\\";
    
    
    //initially trying with local
	public static final Path ROOTFILE_LOCATION=Paths.get(new java.io.File("").getAbsolutePath()+"\\temp_upload");
	
	//FTP DETAILS
	public static final String USER_NAME="pcsuser";
	public static final String PASSWORD="Atos123";
	public static final int PORT=22;
	public static final String HOST="nlsivm758.sdmc.ao-srv.com";
	public static final String HOME_LOCATION_KLM_PCS="/home/fsdspcsa/pcs/klm";
	
	//KLMAirfrance
    public static final int ACCESS_TOKEN_VALIDITY_SECONDS = 5*60*60;
    public static final String SIGNING_KEY = "klmairfrance";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
	
   
}
