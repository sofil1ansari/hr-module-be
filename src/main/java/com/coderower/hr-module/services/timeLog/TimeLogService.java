package com.coderower.hr-module.services.timeLog;

import com.coderower.hr-module.database.entities.TimeLog;

import java.util.List;

public interface TimeLogService {

    public List<TimeLog> findAndCountAll();

    public TimeLog create(TimeLog data);

    public TimeLog find(String id);

    public void delete(int id );

    public TimeLog update(int id , TimeLog data);
}
