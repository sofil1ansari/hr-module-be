package com.coderower.hrmodule.database.repositories;

import com.coderower.hrmodule.database.entities.TimeLog;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TimeLogRepository extends MongoRepository<TimeLog,String> {
    @Query("{ 'id' : ?0 }")
    Optional<TimeLog> findById(String id);

//    @Query("{ 'query' : ?0 }")
//	List<TimeLog> findByNameContainingIgnoreCase(String query);
}