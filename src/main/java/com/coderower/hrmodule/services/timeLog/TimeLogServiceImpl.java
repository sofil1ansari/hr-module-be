package com.coderower.hrmodule.services.timeLog;
import com.coderower.hrmodule.database.entities.TimeLog;
import com.coderower.hrmodule.database.repositories.TimeLogRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TimeLogServiceImpl implements TimeLogService {
    @Autowired
    private TimeLogRepository repository;

    @Override
    public Page<TimeLog> findAndCountAll(PageRequest pageRequest) {
        return repository.findAll(pageRequest);
    }

    @Override
    public TimeLog find(String id) {
    	 return repository.findById(id).orElse(null);
    }

    @Override
    public TimeLog create(TimeLog data) {
        return repository.save(data);
    }

    @Override
    public void delete(String id) {
    	 Optional<TimeLog> record = repository.findById(id);
    	    if (record.isPresent()) {
    	        repository.delete(record.get());
    	    }
    }

    @Override
    public TimeLog update(String id, TimeLog data) {
    	TimeLog existingTimeLog = repository.findById(id).orElse(null);
        if (existingTimeLog != null) {
            existingTimeLog.setEmployee(data.getEmployee());
        	existingTimeLog.setEmail(data.getEmail());
            existingTimeLog.setWorkItem(data.getWorkItem());
        	existingTimeLog.setStart(data.getStart());
            existingTimeLog.setEnd(data.getEnd());
            return repository.save(existingTimeLog);
        }
        return null;

    }

    @Override
    public Page<TimeLog> findAndCountAllByEmployeeTitleContainingIgnoreCase(String title, Pageable pageable) {
        return repository.findByEmployeeTitleContainingIgnoreCase(title, pageable);
    }

//    @Override
//    public List<TimeLog> findAndCountAll(String query) {
//        // Assuming you have a MongoDB repository
//        List<TimeLog> timeLogs = repository.findByNameContainingIgnoreCase(query);
//        return timeLogs;
//    }

}
