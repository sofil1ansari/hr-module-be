package com.coderower.hrmodule.services.project;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.coderower.hrmodule.database.entities.Project;

public interface ProjectService {

	Page<Project> findAndCountAll(PageRequest pageRequest);

	Project find(String id);

	Project create(Project data);

	Project update(String id, Project data);

	void delete(String id);


}
