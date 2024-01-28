package com.coderower.hrmodule.services.employee;

import com.coderower.hrmodule.database.entities.Employee;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface EmployeeService {
	
	 public Page<Employee> findAndCountAll(PageRequest pageRequest);

	    public Employee create(Employee data);

	    public Employee find(String id);

	    public void delete(String id );

	    public Employee update(String id , Employee data);

		public List<Employee> findAndCountAll();

		public List<Employee> findAndCountAll(String query);
	

}
