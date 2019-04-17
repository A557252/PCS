package com.pcs.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pcs.portal.model.ApiResponse;
import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.model.PcsBatchScheduling;
import com.pcs.portal.service.BatchSchedulingService;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/batchscheduling")
public class BatchSchedulingController {

	@Autowired
	BatchSchedulingService batchScheduling;
	
	@GetMapping("/fsdschedule")
	public ApiResponse<Void> getAllFsdSchedule(){
		List<FsdBatchScheduling> allFsdBatchSchedule= batchScheduling.getAllFsdBatchSchedulingData(10,20);
		return new ApiResponse<>(HttpStatus.OK.value(),"success",allFsdBatchSchedule);
	}
	
	@GetMapping("/pcsschedule")
	public ApiResponse<Void> getAllPcsScedule(){
		List<PcsBatchScheduling> allPcsBatchSchedule= batchScheduling.getAllPcsBatchSchedulingData(10,20);
		return new ApiResponse<>(HttpStatus.OK.value(),"success",allPcsBatchSchedule);
	}
	
}
