package com.coderower.hrmodule.services.project;

import com.coderower.hrmodule.database.entities.Project;

import java.util.List;

public interface ProjectService {

    public List<Project> findAndCountAll();

    public Project create(Project data);

    public Project find(String id);

    public void delete(String id );

    public Project update(String id , Project data);
}
