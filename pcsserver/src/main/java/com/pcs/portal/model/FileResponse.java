package com.pcs.portal.model;

public class FileResponse {
	
	private String parameter;
	private String fileType;
	private String id;

	public String getParameter() {
		return parameter;
	}
	public void setParameter(String parameter) {
		this.parameter = parameter;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public FileResponse(String parameter, String fileType) {
		super();
		this.parameter = parameter;
		this.fileType = fileType;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
}
