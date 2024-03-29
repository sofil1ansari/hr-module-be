package com.coderower.hrmodule.services.timeLog;

import com.coderower.hrmodule.database.entities.TimeLog;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface TimeLogService {

	 public Page<TimeLog> findAndCountAll(PageRequest pageRequest);

	    public TimeLog create(TimeLog data);

	    public TimeLog find(String id);

	    public void delete(String id );

	    public TimeLog update(String id , TimeLog data);

	    Page<TimeLog> findAndCountAllByEmployeeTitleContainingIgnoreCase(String filterEmployeeTitle, Pageable pageable);

	//public List<TimeLog> findAndCountAll(String query);

}
