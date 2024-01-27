package com.coderower.hrmodule.services.project;

import com.coderower.hrmodule.database.entities.Project;
import com.coderower.hrmodule.models.project.ProjectRequestModel;

import java.util.List;

public interface ProjectService {

	List<Project> findAllProjects();

	Project findProjectById(String id);

	Project addProject(Project project);

	Project updateProject(String id, Project updatedProject);

	void deleteProject(String id);

	List<Project> findAndCountAll(ProjectRequestModel 
			                      requestModel, Integer 
			                      offset, Integer 
			                      limit, String orderBy);

	List<Project> findAndCountAll();





//    public List<Project> findAndCountAll();
//
//    public List<Project> create(Project data);
//
//    public Project find(String id);
//
//    public void delete(String id );
//
//    public Project update(String id , Project data);
	
	
}
