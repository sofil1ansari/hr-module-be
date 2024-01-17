package com.coderower.hr-module.database.repositories;

import com.coderower.hr-module.database.entities.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProjectRepository extends MongoRepository<Project,Integer> {
    @Query("{ 'id' : ?0 }")
    Project findById(String id);
}