package com.coderower.hrmodule.services.project;

import com.coderower.hrmodule.database.entities.Project;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ProjectService {

	public Page<Project> findAndCountAll(PageRequest pageRequest);

    public Project create(Project data);

    public Project find(String id);

    public void delete(String id );

    public Project update(String id , Project data);
}
