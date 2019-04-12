package com.pcs.portal.service;

import org.springframework.web.multipart.MultipartFile;

public interface IncraImport {

	public boolean StoreIncraFile(MultipartFile incraFile);
	public String makeEntryDb(MultipartFile incraFile);
}
