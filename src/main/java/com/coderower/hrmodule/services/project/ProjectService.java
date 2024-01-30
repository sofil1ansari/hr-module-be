package com.coderower.hrmodule.services.project;

import com.coderower.hrmodule.database.entities.Project;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface ProjectService {

	public Page<Project> findAndCountAll(PageRequest pageRequest);

    public Project create(Project data);

    public Project find(String id);

    public void delete(String id );

    public Project update(String id , Project data);

	Page<Project> findByNameAndDescription(String name, String description, Pageable pageable);

	public Page<Project> findAndCountByName(String name, PageRequest pageRequest);

    
}