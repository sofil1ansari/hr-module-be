package com.coderower.hr-module.services.project;

import com.coderower.hr-module.database.entities.Project;

import java.util.List;

public interface ProjectService {

    public List<Project> findAndCountAll();

    public Project create(Project data);

    public Project find(String id);

    public void delete(int id );

    public Project update(int id , Project data);
}
