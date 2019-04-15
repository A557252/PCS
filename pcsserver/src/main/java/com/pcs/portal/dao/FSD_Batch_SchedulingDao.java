package com.pcs.portal.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.pcs.portal.model.FsdBatchScheduling;

public interface FSD_Batch_SchedulingDao extends JpaRepository<FsdBatchScheduling, Integer> {
	
}
