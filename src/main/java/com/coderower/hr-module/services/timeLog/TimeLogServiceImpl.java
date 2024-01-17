package com.coderower.hr-module.services.timeLog;

import com.coderower.hr-module.database.entities.TimeLog;
import com.coderower.hr-module.database.repositories.TimeLogRepository;
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
    public TimeLog delete(int id) {
        TimeLog record = repository.findById(id).get();
        repository.delete(record);
    }

    @Override
    public TimeLog update(int id, TimeLog data) {
        TimeLog record = repository.findById(id).get();
        record.setName(data.getName());
        record.setPrice(data.getPrice());
        record.setQuantity(data.getQuantity());
        repository.save(record);
        return record;
    }
}
