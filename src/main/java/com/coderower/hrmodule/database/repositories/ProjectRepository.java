package com.coderower.hrmodule.database.repositories;

import com.coderower.hrmodule.database.entities.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ProjectRepository extends MongoRepository<Project,Integer> {
    @Query("{ 'id' : ?0 }")
    Project findById(String id);
}