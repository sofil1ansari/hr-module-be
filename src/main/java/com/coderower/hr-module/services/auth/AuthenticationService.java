package com.coderower.hr-module.services.auth;

import com.coderower.hr-module.database.entities.Product;
import com.coderower.hr-module.models.auth.AuthenticationRequest;

public interface AuthenticationService {

    public String signIn(AuthenticationRequest authenticationRequest);

}
