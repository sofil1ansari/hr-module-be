package com.coderower.hr-module.database.repositories;

import java.util.Optional;

import com.coderower.hr-module.database.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Integer> {
    Optional<User> findByEmail(String email);
}
