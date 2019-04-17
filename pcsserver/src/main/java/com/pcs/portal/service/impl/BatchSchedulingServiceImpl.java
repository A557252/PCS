package com.pcs.portal.service.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pcs.portal.dao.FSD_Batch_SchedulingDao;
import com.pcs.portal.dao.PcsBatchSchedulingDao;
import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.model.PcsBatchScheduling;
import com.pcs.portal.service.BatchSchedulingService;

@Service
public class BatchSchedulingServiceImpl implements BatchSchedulingService {
	
	@Autowired
	private FSD_Batch_SchedulingDao fsdBatchSchedulingDao;
	
	@Autowired
	private PcsBatchSchedulingDao pcsBatchSchedulingDao;
	
	@Override
	public List<FsdBatchScheduling> getAllFsdBatchSchedulingData() {
		return fsdBatchSchedulingDao.findAllFsdData();
	}

	@Override
	public List<PcsBatchScheduling> getAllPcsBatchSchedulingData() {
		return pcsBatchSchedulingDao.findAllPcsData();
	}

}
