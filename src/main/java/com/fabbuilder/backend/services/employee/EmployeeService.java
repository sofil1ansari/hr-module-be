package com.coderower.hr-module.services.employee;

import com.coderower.hr-module.database.entities.Employee;

import java.util.List;

public interface EmployeeService {

    public List<Employee> findAndCountAll();

    public Employee create(Employee data);

    public Employee find(String id);

    public void delete(int id );

    public Employee update(int id , Employee data);
}
