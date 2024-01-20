package com.coderower.hrmodule.services.timeLog;

import com.coderower.hrmodule.database.entities.TimeLog;

import java.util.List;

public interface TimeLogService {

    public List<TimeLog> findAndCountAll();

    public TimeLog create(TimeLog data);

    public TimeLog find(String id);

    public void delete(String id );

    public TimeLog update(String id , TimeLog data);
}
