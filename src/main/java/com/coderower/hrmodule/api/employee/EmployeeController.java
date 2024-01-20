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
    public Employee find(@PathVariable String id ){
        return service.find(id);
    }

    @PostMapping("/")
    public Employee create(@RequestBody Employee data){
        return service.create(data);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable String id,@RequestBody Employee data ){
        return service.update(id,data);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id ){

          service.delete(id);
    }
}