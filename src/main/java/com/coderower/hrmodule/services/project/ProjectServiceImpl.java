package com.coderower.hrmodule.services.project;

import com.coderower.hrmodule.database.entities.Project;
import com.coderower.hrmodule.database.repositories.ProjectRepository;
import com.coderower.hrmodule.models.project.ProjectRequestModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ProjectServiceImpl implements ProjectService {
	
    @Autowired
    private ProjectRepository repository;

	@Override
	public List<Project> findAllProjects() {
		
		return repository.findAll();
	}

	@Override
	public Project findProjectById(String id) {
		
		return repository.findById(id).orElse(null);
	}

	@Override
	public Project addProject(Project project) {
		
		return repository.save(project);
	}

	@Override
	public Project updateProject(String id, Project updatedProject) {
		 Optional<Project> existingProjectOptional = repository.findById(id);

		    if (existingProjectOptional.isPresent()) {
		        Project existingProject = existingProjectOptional.get();
		        
		        if (updatedProject.getName() != null) {
		            existingProject.setName(updatedProject.getName());
		        }

		        if (updatedProject.getDescription() != null) {
		            existingProject.setDescription(updatedProject.getDescription());
		        }

		        
		        if (updatedProject.getId() != null) {
		            existingProject.setId(updatedProject.getId());
		        }

		        return repository.save(existingProject);
		    }

		    return null;
	}

	@Override
	public void deleteProject(String id) {
		
		repository.deleteById(id);
		
	}

	@Override
	public List<Project> findAndCountAll(ProjectRequestModel requestModel, 
			                              Integer offset, 
			                              Integer limit,
			                              String orderBy) {
		
		List<Project> projects = repository.findAll();
		
		return projects;
	}

	@Override
	public List<Project> findAndCountAll() {
		
		return repository.findAll();
	}

	  
    
//    @Override
//    public List<Project> findAndCountAll() {
//        return repository.findAll();
//    }
//s
//    @Override
//    public Project find(String id) {
//        return repository.findById(id);
//    }
//
//    @Override
//    public List<Project> create(Project data) {
//    	repository.save(data);
//    	List <Project> tr=repository.findAll();
//		return tr;
//    }
//
//    @Override
//    public void delete(String id) {
//        Project record = repository.findById(id);
//        repository.delete(record);
//    }
//
//    @Override
//    public Project update(String id, Project data) {
//        Project record = repository.findById(id);
//        repository.save(record);
//        return record;
//    }
    
    
}
