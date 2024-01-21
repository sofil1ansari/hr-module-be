package com.coderower.hrmodule.services.auth;


import com.coderower.hrmodule.models.auth.AuthenticationRequest;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {


	 // You need to implement the signIn method based on your application logic
    public String signIn(AuthenticationRequest request) {
        // Implement your logic to authenticate the user
        // Return a token or any other response based on your requirements
        return "Authentication successful";
    }
}
