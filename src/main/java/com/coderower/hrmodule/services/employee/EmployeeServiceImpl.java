package com.coderower.hrmodule.services.employee;

import com.coderower.hrmodule.database.entities.Employee;

import com.coderower.hrmodule.database.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository repository;

	@Override
	public Page<Employee> findAndCountAll(PageRequest pageRequest) {
		
		return repository.findAll(pageRequest);
	}

	@Override
	public Employee create(Employee data) {
		
		return repository.save(data);
	}

	@Override
	public Employee find(String id) {
		
		return repository.findById(id).orElse(null);
	}

	@Override
	public void delete(String id) {
	
		repository.deleteById(id);
	}

	@Override
	public Employee update(String id, Employee data) {
		Employee existingEmployee = repository.findById(id).orElse(null);
		 if (existingEmployee != null) {
			 existingEmployee.setId(data.getId());
			 existingEmployee.setTitle(data.getTitle());
			 existingEmployee.setFirstName(data.getFirstName());
			 existingEmployee.setLastName(data.getLastName());
			 existingEmployee.setEmail(data.getEmail());
			 existingEmployee.setPhoneNumber(data.getPhoneNumber());
	            return repository.save(existingEmployee);
		 }
		return null;
	}

	@Override
	public List<Employee> findAndCountAll() {
	
		return repository.findAll();
	}

	@Override
	public List<Employee> findAndCountAll(String query) {
		
		return repository.findAll();
	}

	@Override
	public Employee findBytitle(String title) {
		
		return repository.findBytitle(title);
	}
}
