package com.coderower.hrmodule.services.auth;
import com.coderower.hrmodule.models.auth.AuthenticationRequest;

public interface AuthenticationService {

    public String signIn(AuthenticationRequest authenticationRequest);

}
