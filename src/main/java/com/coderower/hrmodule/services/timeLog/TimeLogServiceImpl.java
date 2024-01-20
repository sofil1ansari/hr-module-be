package com.coderower.hrmodule.services.timeLog;

import com.coderower.hrmodule.database.entities.TimeLog;
import com.coderower.hrmodule.database.repositories.TimeLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TimeLogServiceImpl implements TimeLogService {
    @Autowired
    private TimeLogRepository repository;
    @Override
    public List<TimeLog> findAndCountAll() {
        return repository.findAll();
    }

    @Override
    public TimeLog find(String id) {
        return repository.findById(id);
    }

    @Override
    public TimeLog create(TimeLog data) {
        return repository.save(data);
    }

    @Override
    public void delete(String id) {//changed return type to void 
        TimeLog record = repository.findById(id);//remove get()
        repository.delete(record);
    }

    @Override
    public TimeLog update(String id, TimeLog data) {
        TimeLog record = repository.findById(id);//remove get()
//        record.setName(data.getName());
//        record.setPrice(data.getPrice());
//        record.setQuantity(data.getQuantity());
        if(record != null) {
            repository.save(record);
           }
        return record;
    }
}
