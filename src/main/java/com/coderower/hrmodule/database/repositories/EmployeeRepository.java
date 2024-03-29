package com.coderower.hrmodule.database.repositories;

import com.coderower.hrmodule.database.entities.Employee;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface EmployeeRepository extends MongoRepository<Employee,String> {
    @Query("{ 'id' : ?0 }")
    Optional<Employee> findById(String id);

    @Query("{ 'title' : ?0 }")
    Employee findBytitle(String title);

    Page<Employee> findAndCountAllByTitleContainingIgnoreCase(String filterName, PageRequest of);

}