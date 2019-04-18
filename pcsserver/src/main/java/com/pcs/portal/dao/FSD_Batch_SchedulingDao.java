package com.pcs.portal.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pcs.portal.model.FsdBatchScheduling;

public interface FSD_Batch_SchedulingDao extends JpaRepository<FsdBatchScheduling, Integer> {
	
	@Query(value="SELECT *\r\n" + 
			"  FROM ( SELECT tmp.*, rownum rn\r\n" + 
			"           FROM ( SELECT *\r\n" + 
			"                    FROM fsd_batch_schedulings\r\n" + 
			"                   ORDER BY date_modified DESC\r\n" + 
			"                ) tmp\r\n" + 
			"          WHERE rownum <= :to\r\n" + 
			"       )\r\n" + 
			" WHERE rn > :from",nativeQuery=true)
	List<FsdBatchScheduling> findAllFsdData(@Param("from") int from,@Param("to") int to);
	
	@Query(value="SELECT FSD_BSG_SEQ1.nextval FROM dual",nativeQuery=true)
	long getNextValue();
	
	@Query(value="select count(*) from fsd_batch_schedulings",nativeQuery=true)
	int getFsdRowCount();
	
}
