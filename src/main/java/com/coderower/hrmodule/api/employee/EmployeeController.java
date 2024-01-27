package com.coderower.hrmodule.api.employee;

import com.coderower.hrmodule.database.entities.Employee;
import com.coderower.hrmodule.models.employee.EmployeeRequestModel;
import com.coderower.hrmodule.services.employee.EmployeeService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService service;

    @GetMapping("")
    public List<Employee> findAndCountAll(HttpServletRequest request,
                                     @ModelAttribute EmployeeRequestModel requestModel,
                                     Optional<Integer> offset,
                                     Optional<Integer> limit,
                                     Optional <String> orderBy
                                     ) {
        return service.findAndCountAll();
    }

    @GetMapping("/{id}")
    public Employee findById(@PathVariable String id ){
        return service.findById(id);
    }

    @PostMapping("/add")
    public Employee createEmployee(@RequestBody Employee employee){
        return service.createEmployee(employee);
    }

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable String id,@RequestBody Employee updateEmployee ){
        return service.updateEmployee(id,updateEmployee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable String id ){

          service.deleteEmployee(id);
    }
    
    @GetMapping("/autocomplete")
    public List<Employee> autocomplete(@PathVariable String query ){
        return  service.findAndCountAll();
    }
}