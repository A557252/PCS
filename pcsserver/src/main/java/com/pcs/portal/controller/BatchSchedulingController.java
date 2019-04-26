package com.pcs.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pcs.portal.model.ApiResponse;
import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.model.PcsBatchScheduling;
import com.pcs.portal.service.BatchSchedulingService;
import com.pcs.portal.utils.Constants;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/batchscheduling")
public class BatchSchedulingController {
	@Autowired
	BatchSchedulingService batchScheduling;
	@GetMapping("/fsdschedule/{from}/{to}")
	public ApiResponse<Void> getAllFsdSchedule(@PathVariable("from") int from,@PathVariable("to") int to){
		List<FsdBatchScheduling> allFsdBatchSchedule= batchScheduling.getAllFsdBatchSchedulingData(from,to);
		return new ApiResponse<>(HttpStatus.OK.value(),Constants.SUCCESS,allFsdBatchSchedule);
	}
	@GetMapping("/pcsschedule/{from}/{to}")
	public ApiResponse<Void> getAllPcsScedule(@PathVariable("from") int from,@PathVariable("to") int to){
		List<PcsBatchScheduling> allPcsBatchSchedule= batchScheduling.getAllPcsBatchSchedulingData(from,to);
		return new ApiResponse<>(HttpStatus.OK.value(),Constants.SUCCESS,allPcsBatchSchedule);
	}
	@GetMapping("/fsdcount")
	public ApiResponse<Void> getFsdRowCount(){
		return new ApiResponse<>(HttpStatus.OK.value(),Constants.SUCCESS,batchScheduling.getAllFsdBatchSchedulingDataCount());
	}
	@GetMapping("/pcscount")
	public ApiResponse<Void> getPcsRowCount(){
		return new ApiResponse<>(HttpStatus.OK.value(),Constants.SUCCESS,batchScheduling.getAllPcsBatchSchedulingDataCount());
	}
}