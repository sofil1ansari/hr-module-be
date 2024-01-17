package com.coderower.hr-module.services.auth;


import com.coderower.hr-module.models.auth.AuthenticationRequest;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {


    public String signIn(AuthenticationRequest authenticationRequest) {
        return  "Hello";
    }
}
