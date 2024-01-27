package com.coderower.hrmodule.api.project;

import com.coderower.hrmodule.database.entities.Project;
import com.coderower.hrmodule.models.project.ProjectRequestModel;
import com.coderower.hrmodule.services.project.ProjectService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tenant/6349367e2a89a447fdbd5f97/project")

public class ProjectController {
    @Autowired
    private ProjectService service;

    // rows: List<Project>, count: int;
//    @GetMapping("")
//    public  ResponseEntity<String> findAndCountAll(HttpServletRequest request,
//                                     @ModelAttribute ProjectRequestModel requestModel,
//                                     Optional<Integer> offset,
//                                     Optional<Integer> limit,
//                                     Optional <String> orderBy
//                                     ) {
//    return	ResponseEntity.ok("{\"rows\":[{\"name\":\"test\"}],\"count\":1}");
//    }
    
//    @GetMapping()
//    
//    public List<Project>findAndCountAll(HttpServletRequest request,@ModelAttribute ProjectRequestModel requestModel,
//    		                            Optional<Integer> offset,
//    		                            Optional<Integer> limit,
//    		                            Optional <String> orderBy){
//    	
//		return service.findAndCountAll();
//    	
//    }
//
//    @GetMapping("/{id}")
//    public Project find(@PathVariable String id ){
//        return service.find(id);
//    }
//
//    @PostMapping("/")
//    public List< Project> create(@RequestBody Project data) {
//        return service.create(data);
//    }
//
//    @PutMapping("/{id}")
//    public Project update(@PathVariable String id,@RequestBody Project data ) {
//        return service.update(id,data);
//    }
//
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable String id ) {
//
//          service.delete(id);
//    }
//    
//    @GetMapping("/autocomplete")
//    public List<Project> autocomplete(@PathVariable String query ) {
//        return  service.findAndCountAll();
//    }
    

    @GetMapping
    public List<Project> getAllProjects() {
        return service.findAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable String id) {
        return service.findProjectById(id);
    }

    @PostMapping("/add")
    public Project addProject(@RequestBody Project project) {
        return service.addProject(project);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable String id, @RequestBody Project updatedProject) {
        return service.updateProject(id, updatedProject);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable String id) {
    	service.deleteProject(id);
    }

    @GetMapping("/findAndCountAll")
    public List<Project> findAndCountAll(
            @ModelAttribute ProjectRequestModel requestModel,
            @RequestParam(required = false) Integer offset,
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) String orderBy) {

        return service.findAndCountAll(requestModel, offset, limit, orderBy);
    }
    
    @GetMapping("/autocomplete")
  public List<Project> autocomplete(@PathVariable String query ) {
      return  service.findAndCountAll();
  }
    
}