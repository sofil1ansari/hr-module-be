package com.coderower.hr-module.services.employee;

import com.coderower.hr-module.database.entities.Employee;
import com.coderower.hr-module.database.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository repository;
    @Override
    public List<Employee> findAndCountAll() {
        return repository.findAll();
    }

    @Override
    public Employee find(String id) {
        return repository.findById(id);
    }

    @Override
    public Employee create(Employee data) {
        return repository.save(data);
    }

    @Override
    public Employee delete(int id) {
        Employee record = repository.findById(id).get();
        repository.delete(record);
    }

    @Override
    public Employee update(int id, Employee data) {
        Employee record = repository.findById(id).get();
        record.setName(data.getName());
        record.setPrice(data.getPrice());
        record.setQuantity(data.getQuantity());
        repository.save(record);
        return record;
    }
}
