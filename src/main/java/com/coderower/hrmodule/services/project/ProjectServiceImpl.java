package com.coderower.hrmodule.services.project;

import com.coderower.hrmodule.database.entities.Project;
import com.coderower.hrmodule.database.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.Optional;
@Service

public class ProjectServiceImpl implements ProjectService {
	
    @Autowired
    private  ProjectRepository repository;
    
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
    public void delete(String id) {
    	 Optional<Project> record = repository.findById(id);
    	    if (record.isPresent()) {
    	        repository.delete(record.get());
    	    }
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
    public Page<Project> findByNameAndDescription(String name, String description, Pageable pageable) {
        return repository.findByNameAndDescription(name, description, pageable);
    }
	


	@Override
	public Page<Project> findAndCountByName(String name, PageRequest pageRequest) {
		 System.out.println("Searching by name: " + name);
		
		return repository.findByName(name, pageRequest);
	}
	
}