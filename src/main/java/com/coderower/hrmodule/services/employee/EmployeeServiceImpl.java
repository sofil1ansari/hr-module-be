package com.coderower.hrmodule.services.employee;

import com.coderower.hrmodule.database.entities.Employee;
import com.coderower.hrmodule.database.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository repository;
    @Override
    public List<Employee> findAndCountAll() {
        return repository.findAll();
    }
	@Override
	public Employee findById(String id) {
		
		return repository.findById(id).orElse(null);
	}
	@Override
	public Employee createEmployee(Employee employee) {
	
		return repository.save(employee);
	}
	@Override
	public Employee updateEmployee(String id, Employee updateEmployee) {
		
		Optional<Employee> existingEmployeeOptional = repository.findById(id);
		 
		 if (existingEmployeeOptional.isPresent()) {
			 Employee existingEmployee= existingEmployeeOptional.get();
		        
		        if (updateEmployee.getTitle() != null) {
		            existingEmployee.setTitle(updateEmployee.getTitle());
		        }

		        if (updateEmployee.getFirstName() != null) {
		        	existingEmployee.setFirstName(updateEmployee.getFirstName());
		        }

		        if (updateEmployee.getLastName() != null) {
		        	existingEmployee.setLastName(updateEmployee.getLastName());
		        }
		        
		        if (updateEmployee.getEmail() != null) {
		        	existingEmployee.setEmail(updateEmployee.getEmail());
		        }
		        
		        if (updateEmployee.getPhoneNumber() != null) {
		        	existingEmployee.setPhoneNumber(updateEmployee.getPhoneNumber());
		        }
		        
		        if (updateEmployee.getId() != null) {
		        	existingEmployee.setId(updateEmployee.getId());
		        }

		        return repository.save(updateEmployee);
		    }

		    return null;
	
	}
	@Override
	public void deleteEmployee(String id) {
		
		repository.deleteById(id);
	}

   
}
