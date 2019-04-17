package com.pcs.portal.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pcs.portal.model.FsdBatchScheduling;

public interface FSD_Batch_SchedulingDao extends JpaRepository<FsdBatchScheduling, Integer> {
	
	@Query(value="SELECT * FROM fsd_batch_schedulings order by date_modified desc",nativeQuery=true)
	List<FsdBatchScheduling> findAllFsdData();
	
	@Query(value="SELECT FSD_BSG_SEQ1.nextval FROM dual",nativeQuery=true)
	long getNextValue();
	
}
