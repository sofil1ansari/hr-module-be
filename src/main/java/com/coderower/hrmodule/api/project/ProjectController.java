package com.coderower.hrmodule.api.project;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.coderower.hrmodule.database.entities.Project;
import com.coderower.hrmodule.models.project.ProjectRequestModel;
import com.coderower.hrmodule.services.project.ProjectService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/tenant/6349367e2a89a447fdbd5f97/project")

public class ProjectController {
	 @Autowired
	    private ProjectService service;
	 
	 @GetMapping("")
	    public ResponseEntity<Map<String, Object>> getProjects(HttpServletRequest request,
	                                                           @ModelAttribute ProjectRequestModel requestModel,
	                                                           @RequestParam(defaultValue = "0") int offset,
	                                                           @RequestParam(defaultValue = "10") int limit,
	                                                           @RequestParam(defaultValue = "id") String orderBy) {
	        int page = offset / limit;

	        Sort sort = orderBy.isEmpty() ? Sort.unsorted() : Sort.by(Sort.Direction.ASC, orderBy);
	        Page<Project> projectsPage = service.findAndCountAll(PageRequest.of(page, limit, sort));

	        Map<String, Object> response = new HashMap<>();
	        response.put("rows", projectsPage.getContent());
	        response.put("count", projectsPage.getTotalElements());

	        return ResponseEntity.ok(response);
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Project> getProjectById(@PathVariable String id) {
	        Project project = service.find(id);
	        return project != null ? ResponseEntity.ok(project) : ResponseEntity.notFound().build();
	    }

	    @PostMapping("/")
	    public ResponseEntity<Project> createProject(@RequestBody Project project) {
	        Project createdProject = service.create(project);
	        return ResponseEntity.ok(createdProject);
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<Project> updateProject(@PathVariable String id, @RequestBody Project projectData) {
	        Project updatedProject = service.update(id, projectData);
	        return updatedProject != null ? ResponseEntity.ok(updatedProject) : ResponseEntity.notFound().build();
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteProject(@PathVariable String id) {
	    	service.delete(id);
	        return ResponseEntity.noContent().build();
	    }

	 
}