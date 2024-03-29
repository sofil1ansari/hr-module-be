package com.coderower.hrmodule.database.repositories;

import com.coderower.hrmodule.database.entities.TimeLog;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TimeLogRepository extends MongoRepository<TimeLog,String> {
    @Query("{ 'id' : ?0 }")
    Optional<TimeLog> findById(String id);

//    @Query("{ 'query' : ?0 }")
//	List<TimeLog> findByNameContainingIgnoreCase(String query);

    @Query("{ 'employee.title' : { $regex: ?0, $options: 'i' } }")
    Page<TimeLog> findByEmployeeTitleContainingIgnoreCase(String title, Pageable pageable);

}