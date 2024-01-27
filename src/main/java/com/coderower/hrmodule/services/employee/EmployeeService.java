package com.coderower.hrmodule.services.employee;

import com.coderower.hrmodule.database.entities.Employee;

import java.util.List;

public interface EmployeeService {

    public List<Employee> findAndCountAll();

	public Employee findById(String id);

	public Employee createEmployee(Employee employee);

	public Employee updateEmployee(String id, Employee updateEmployee);

	public void deleteEmployee(String id);

   
}
