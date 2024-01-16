package com.coderower.hr-module.services.project;

import com.coderower.hr-module.database.entities.Project;
import com.coderower.hr-module.database.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private ProjectRepository repository;
    @Override
    public List<Project> findAndCountAll() {
        return repository.findAll();
    }

    @Override
    public Project find(String id) {
        return repository.findById(id);
    }

    @Override
    public Project create(Project data) {
        return repository.save(data);
    }

    @Override
    public Project delete(int id) {
        Project record = repository.findById(id).get();
        repository.delete(record);
    }

    @Override
    public Project update(int id, Project data) {
        Project record = repository.findById(id).get();
        record.setName(data.getName());
        record.setPrice(data.getPrice());
        record.setQuantity(data.getQuantity());
        repository.save(record);
        return record;
    }
}
