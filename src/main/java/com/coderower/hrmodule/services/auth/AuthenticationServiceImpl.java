package com.coderower.hrmodule.services.auth;


import com.coderower.hrmodule.database.entities.User;
import com.coderower.hrmodule.database.repositories.UserRepository;
import com.coderower.hrmodule.models.auth.AuthenticationRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
	@Autowired
    private UserRepository userRepository;
	

    public String signIn(AuthenticationRequest authenticationRequest) {
        return  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDkzNjcwZjQ2MjA5ZDRlZTFmNjYzMSIsImlhdCI6MTcwNTcyNTA3NiwiZXhwIjoxNzA2MzI5ODc2fQ.9P_nUsD-avCa__3KTIusREp25wQ1xntXeMkYzgdDkSI";
    }

	@Override
	public void registerUser(User user) {
		
		userRepository.save(user);
	}

	@Override
	public User getUsers(String id) {
		
		return userRepository.findByEmail(id).orElse(null);
	}

	@Override
	public Iterable<User> getAllUsers() {
		
		return userRepository.findAll();
	}

	@Override
	public void deletUsers(String id) {
		
		userRepository.deleteById(id);
	}

	
}
