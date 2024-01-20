package com.coderower.hrmodule.services.employee;

import com.coderower.hrmodule.database.entities.Employee;

import java.util.List;

public interface EmployeeService {

    public List<Employee> findAndCountAll();

    public Employee create(Employee data);

    public Employee find(String id);

    public void delete(String id );

    public Employee update(String id , Employee data);
}
