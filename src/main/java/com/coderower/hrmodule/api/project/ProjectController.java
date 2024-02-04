package com.coderower.hrmodule.api.project;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.coderower.hrmodule.database.entities.JsonRequest;
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
import com.coderower.hrmodule.database.repositories.ProjectRepository;
import com.coderower.hrmodule.models.project.ProjectRequestModel;
import com.coderower.hrmodule.services.project.ProjectService;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/tenant/6349367e2a89a447fdbd5f97/project")
public class ProjectController {
	
	 @Autowired
	  private ProjectService service;
	 
	 @Autowired
	 private ProjectRepository repository;

	 @GetMapping("")
	    public ResponseEntity<Object> findAndCountAll(
	            HttpServletRequest request,
	            @ModelAttribute ProjectRequestModel requestModel,
	            @RequestParam Optional<Integer> offset,
	            @RequestParam Optional<Integer> limit,
	            @RequestParam Optional<String> orderBy,
	            @RequestParam(name = "filter[name]", required = false) String filterName
	    ) {

	        int page = offset.orElse(0) / limit.orElse(10);

	        Sort sort = orderBy.map(property -> property.isEmpty() ? Sort.unsorted() : Sort.by(Sort.Direction.ASC, property))
	                .orElse(Sort.unsorted());

	        Page<Project> project;

	        if (filterName != null) {
	            project = repository.findAndCountAllByNameContainingIgnoreCase(filterName, PageRequest.of(page, limit.orElse(10), sort));
	        } else {
	            
	            project = service.findAndCountAll(PageRequest.of(page, limit.orElse(10), sort));
	        }

	        return ResponseEntity.ok(Map.of("rows", project.getContent(), "count", project.getTotalElements()));
	    
	}	 
	 
    @GetMapping("/{id}")
    public Project find(@PathVariable String id ) {
    	
        return service.find(id);
    }


	@PostMapping("")
	public Project create(@RequestBody JsonRequest jsonRequest){
		Project data = jsonRequest.getData();
		return service.create(data);
	}

    @PutMapping("/{id}")
    public Project update(@PathVariable String id,@RequestBody JsonRequest jsonRequest ){
		Project data = jsonRequest.getData();
		return service.update(id,data);
    }

	@DeleteMapping("")
	public void delete(@RequestParam(name = "ids[]") List<String> ids) {
		for (String id : ids) {
			service.delete(id);
		}
	}

}