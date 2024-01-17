package com.coderower.hr-module.database.repositories;

import com.coderower.hr-module.database.entities.TimeLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TimeLogRepository extends MongoRepository<TimeLog,Integer> {
    @Query("{ 'id' : ?0 }")
    TimeLog findById(String id);
}