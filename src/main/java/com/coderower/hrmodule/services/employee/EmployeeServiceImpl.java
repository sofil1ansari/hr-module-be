package com.coderower.hrmodule.services.employee;

import com.coderower.hrmodule.database.entities.Employee;
import com.coderower.hrmodule.database.repositories.EmployeeRepository;
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
    public void delete(String id) {//changed return type to void 
        Employee record = repository.findById(id);//remove get()
        repository.delete(record);
    }

    @Override
    public Employee update(String id, Employee data) {
        Employee record = repository.findById(id);//remove get()
//        record.setName(data.getName());
//        record.setPrice(data.getPrice());
//        record.setQuantity(data.getQuantity());
        if(record != null) {
            repository.save(record);
           }

        return record;
    }
}
