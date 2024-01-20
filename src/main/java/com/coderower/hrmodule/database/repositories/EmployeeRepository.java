package com.coderower.hrmodule.database.repositories;

import com.coderower.hrmodule.database.entities.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface EmployeeRepository extends MongoRepository<Employee,Integer> {
    @Query("{ 'id' : ?0 }")
    Employee findById(String id);
}