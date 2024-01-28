package com.coderower.hrmodule.services.project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.coderower.hrmodule.database.entities.Project;
import com.coderower.hrmodule.database.repositories.ProjectRepository;


@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository repository;

	@Override
	public Page<Project> findAndCountAll(PageRequest pageRequest) {
		
		return repository.findAll(pageRequest);
	}

	@Override
	public Project find(String id) {
		
		return repository.findById(id).orElse(null);
	}

	@Override
	public Project create(Project data) {
		
		return repository.save(data);
	}

	@Override
	public Project update(String id, Project data) {
		
		 Project existingProject = repository.findById(id).orElse(null);
		 if (existingProject != null) {
	            existingProject.setName(data.getName());
	            existingProject.setDescription(data.getDescription());
	            return repository.save(existingProject);
	        }
	        return null;

	    }

	@Override
	public void delete(String id) {
		 Optional<Project> record = repository.findById(id);
 	    if (record.isPresent()) {
 	        repository.delete(record.get());
 	    }	
		
	}

	@Override
    public Project findByName(String name) {
        
        return repository.findByName(name);
    }
    
}