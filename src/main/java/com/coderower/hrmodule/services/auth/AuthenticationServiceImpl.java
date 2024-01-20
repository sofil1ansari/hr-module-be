package com.coderower.hrmodule.services.auth;


import com.coderower.hrmodule.models.auth.AuthenticationRequest;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {


    public String signIn(AuthenticationRequest authenticationRequest) {
        return  "Hello";
    }
}
