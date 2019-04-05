package com.pcs.portal.utils;

/**
 * @author Sandeep GUpta
 */

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
}
