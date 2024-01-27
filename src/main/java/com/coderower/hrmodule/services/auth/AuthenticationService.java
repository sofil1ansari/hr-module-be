package com.coderower.hrmodule.services.auth;
import com.coderower.hrmodule.database.entities.User;
import com.coderower.hrmodule.models.auth.AuthenticationRequest;

public interface AuthenticationService {

    public String signIn(AuthenticationRequest authenticationRequest);

	public void registerUser(User user);

	public User getUsers(String id);

	public Iterable<User> getAllUsers();

	public void deletUsers(String id);

	
}
