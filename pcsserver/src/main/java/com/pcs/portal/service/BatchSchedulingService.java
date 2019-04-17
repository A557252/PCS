package com.pcs.portal.service;

import java.util.List;

import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.model.PcsBatchScheduling;;

public interface BatchSchedulingService {

	List<FsdBatchScheduling> getAllFsdBatchSchedulingData();
	List<PcsBatchScheduling> getAllPcsBatchSchedulingData();

}
