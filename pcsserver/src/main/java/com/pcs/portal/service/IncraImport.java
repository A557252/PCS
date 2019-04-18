package com.pcs.portal.service;

import org.springframework.web.multipart.MultipartFile;

import com.pcs.portal.model.FileResponse;

public interface IncraImport {

	public boolean StoreIncraFile(String incraFile,String id);
	public FileResponse makeEntryDb(MultipartFile incraFile);
	public boolean saveIntoBatchScheduling(String name,String parameters,String remarks);
	public String StoreIncraFileTemp(MultipartFile incraFile);
}