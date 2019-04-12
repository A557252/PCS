package com.pcs.portal.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="fsd_batch_schedulings")
public class FsdBatchScheduling {

	@Id
	@Column
	private int id;
	@Column
	private String name;
	@Column
	private Date schedule_date;
	@Column
	private String parameters;
	@Column
	private String remarks;
	@Column
	private Date start_date;
	@Column
	private Date end_date;
	@Column
	private Integer sde_id;
	@Column
	private Date date_created;
	@Column
	private Date date_modified;
	@Column
	private String user_created;
	@Column
	private String user_modified;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getSchedule_date() {
		return schedule_date;
	}
	public void setSchedule_date(Date schedule_date) {
		this.schedule_date = schedule_date;
	}
	public String getParameters() {
		return parameters;
	}
	public void setParameters(String parameters) {
		this.parameters = parameters;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public Date getStart_date() {
		return start_date;
	}
	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}
	public Date getEnd_date() {
		return end_date;
	}
	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}
	public Integer getSde_id() {
		return sde_id;
	}
	public void setSde_id(int sde_id) {
		this.sde_id = sde_id;
	}
	public Date getDate_created() {
		return date_created;
	}
	public void setDate_created(Date date_created) {
		this.date_created = date_created;
	}
	public Date getDate_modified() {
		return date_modified;
	}
	public void setDate_modified(Date date_modified) {
		this.date_modified = date_modified;
	}
	public String getUser_created() {
		return user_created;
	}
	public void setUser_created(String user_created) {
		this.user_created = user_created;
	}
	public String getUser_modified() {
		return user_modified;
	}
	public void setUser_modified(String user_modified) {
		this.user_modified = user_modified;
	}
	
}
