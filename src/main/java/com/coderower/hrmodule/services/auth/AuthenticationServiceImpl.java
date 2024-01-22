package com.coderower.hrmodule.services.auth;


import com.coderower.hrmodule.models.auth.AuthenticationRequest;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {


    public String signIn(AuthenticationRequest authenticationRequest) {
        return  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDkzNjcwZjQ2MjA5ZDRlZTFmNjYzMSIsImlhdCI6MTcwNTcyNTA3NiwiZXhwIjoxNzA2MzI5ODc2fQ.9P_nUsD-avCa__3KTIusREp25wQ1xntXeMkYzgdDkSI";
    }
}
