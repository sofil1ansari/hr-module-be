package com.coderower.hrmodule.database.repositories;

import com.coderower.hrmodule.database.entities.Project;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ProjectRepository extends MongoRepository<Project,String> {
	
	    @Query("{ 'id' : ?0 }")
	    Optional<Project> findById(String id);

		Page<Project> findAndCountAllByNameContainingIgnoreCase(String filterName, PageRequest of);
}