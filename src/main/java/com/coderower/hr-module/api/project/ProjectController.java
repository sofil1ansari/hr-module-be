package com.coderower.hr-module.api.project;

import com.coderower.hr-module.database.entities.Project;
import com.coderower.hr-module.models.project.ProjectRequestModel;
import com.coderower.hr-module.services.project.ProjectService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private ProjectService service;

    @GetMapping("")
    public List<Project> findAndCountAll(HttpServletRequest request,
                                     @ModelAttribute ProjectRequestModel requestModel,
                                     Optional<Integer> offset,
                                     Optional<Integer> limit,
                                     Optional <String> orderBy
                                     ) {
        return service.findAndCountAll();
    }

    @GetMapping("/{id}")
    public Project find(@PathVariable String id ){
        return service.find(id);
    }

    @PostMapping("/")
    public Project create(@RequestBody Product data){
        return service.create(data);
    }

    @PutMapping("/{id}")
    public Project update(@PathVariable int id,@RequestBody Product data ){
        return service.update(id,data);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id ){

          service.delete(id);
    }
}