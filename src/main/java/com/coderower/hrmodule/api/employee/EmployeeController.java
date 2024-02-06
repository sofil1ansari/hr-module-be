package com.coderower.hrmodule.api.employee;

import com.coderower.hrmodule.database.entities.Employee;
import com.coderower.hrmodule.database.entities.JsonRequest;
import com.coderower.hrmodule.database.repositories.EmployeeRepository;
import com.coderower.hrmodule.models.employee.EmployeeRequestModel;
import com.coderower.hrmodule.services.employee.EmployeeService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/tenant/6349367e2a89a447fdbd5f97/employee")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    private EmployeeService service;

    @Autowired
    private EmployeeRepository repository;

    @GetMapping("")
    public  ResponseEntity<Object> findAndCountAll(HttpServletRequest request,
                                                   @ModelAttribute EmployeeRequestModel requestModel,
                                                   Optional<Integer> offset,
                                                   Optional<Integer> limit,
                                                   Optional <String> orderBy, @RequestParam(name = "filter[title]", required = false) String filterTitle
    ) {
        int page = offset.orElse(0) / limit.orElse(20);

        Sort sort = orderBy.map(property -> property.isEmpty() ? Sort.unsorted() : Sort.by(Sort.Direction.ASC, property))
                .orElse(Sort.unsorted());

        Page<Employee> employee;
        if(filterTitle!= null) {
            employee = repository.findAndCountAllByTitleContainingIgnoreCase(filterTitle, PageRequest.of(page, limit.orElse(10), sort));
        }else{employee = service.findAndCountAll(PageRequest.of(page, limit.orElse(20), sort));
        }
        return ResponseEntity.ok(Map.of("count", employee.getTotalElements(),"rows", employee.getContent()));
    }


    @GetMapping("{id}")
    public Employee find(@PathVariable String id ){
        return service.find(id);
    }

    @PostMapping("")
    public Employee create(@RequestBody Employee data){
        System.out.println(data.toString());
        return service.create(data);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable String id,@RequestBody Employee data ){
        return service.update(id,data);
    }

    @DeleteMapping("")
    public void delete(@RequestParam(name = "ids[]") List<String> ids){
        for (String id : ids) {
            service.delete(id);
        }
    }

    
   @GetMapping("/autocomplete")
   public List<Employee> autocomplete(@PathVariable String query ){
       return  service.findAndCountAll(query);
   }
}