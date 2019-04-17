package com.pcs.portal.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.pcs.portal.model.PcsBatchScheduling;

public interface PcsBatchSchedulingDao extends JpaRepository<PcsBatchScheduling, Integer> {

//	@Query(value="SELECT * FROM pcs_batch_schedulings where rownum<=10 order by date_modified desc",nativeQuery=true)

	
//	@Query(value="SELECT * FROM (SELECT * FROM pcs_batch_schedulings order by date_modified desc)t where ROWNUM between 5 and 10 ",nativeQuery=true)

	@Query(value="SELECT *\r\n" + 
			"  FROM ( SELECT tmp.*, rownum rn\r\n" + 
			"           FROM ( SELECT *\r\n" + 
			"                    FROM pcs_batch_schedulings\r\n" + 
			"                   ORDER BY date_modified DESC\r\n" + 
			"                ) tmp\r\n" + 
			"          WHERE rownum <= :to\r\n" + 
			"       )\r\n" + 
			" WHERE rn > :from",nativeQuery=true)
	List<PcsBatchScheduling> findAllPcsData(@Param("from") int from,@Param("to") int to);
}
