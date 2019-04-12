package com.pcs.portal.service;

import com.pcs.portal.model.FsdBatchScheduling;
import com.pcs.portal.model.PcsBatchScheduling;;

public interface BatchSchedulingService {

	Iterable<FsdBatchScheduling> getAllFsdBatchSchedulingData();
	Iterable<PcsBatchScheduling> getAllPcsBatchSchedulingData();

}
