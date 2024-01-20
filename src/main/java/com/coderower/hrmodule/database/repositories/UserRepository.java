package com.coderower.hrmodule.database.repositories;

import java.util.Optional;

import com.coderower.hrmodule.database.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Integer> {
    Optional<User> findByEmail(String email);
}
