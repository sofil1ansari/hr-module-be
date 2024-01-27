package com.coderower.hrmodule.services.timeLog;

import com.coderower.hrmodule.database.entities.TimeLog;
import com.coderower.hrmodule.database.repositories.TimeLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TimeLogServiceImpl implements TimeLogService {
    @Autowired
    private TimeLogRepository repository;
//    @Override
//    public List<TimeLog> findAndCountAll() {
//        return repository.findAll();
//    }
//
//    @Override
//    public TimeLog find(String id) {
//        return repository.findById(id);
//    }
//
//    @Override
//    public TimeLog create(TimeLog data) {
//        return repository.save(data);
//    }
//
//    @Override
//    public void delete(String id) {
//        TimeLog record = repository.findById(id);
//        repository.delete(record);
//    }
//
//    @Override
//    public TimeLog update(String id, TimeLog data) {
//        TimeLog record = repository.findById(id);
//        repository.save(record);
//        return record;
//    }

	@Override
	public List<TimeLog> findAndCountAll() {
		return repository.findAll();
	}

	@Override
	public TimeLog findById(String id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public TimeLog createByTimeLog(TimeLog data) {
		return repository.save(data);
	}

	@Override
	public TimeLog updateTimeLog(String id, TimeLog updatedTimeLog) {
		 Optional<TimeLog> existingTimeLogOptional = repository.findById(id);
		 
		 if (existingTimeLogOptional.isPresent()) {
		        TimeLog existingTimeLog = existingTimeLogOptional.get();
		        
		        if (updatedTimeLog.getEmail() != null) {
		            existingTimeLog.setEmail(updatedTimeLog.getEmail());
		        }

		        if (updatedTimeLog.getWorkItem() != null) {
		        	existingTimeLog.setWorkItem(updatedTimeLog.getWorkItem());
		        }

		        
		        if (updatedTimeLog.getId() != null) {
		        	existingTimeLog.setId(updatedTimeLog.getId());
		        }

		        return repository.save(updatedTimeLog);
		    }

		    return null;
	}

	@Override
	public void deleteTimeLog(String id) {
	
		repository.deleteById(id);
	}

	
}
