package com.coderower.hrmodule.services.auth;


import com.coderower.hrmodule.database.entities.User;
import com.coderower.hrmodule.database.repositories.UserRepository;
import com.coderower.hrmodule.models.auth.AuthUser;
import com.coderower.hrmodule.models.auth.AuthenticationRequest;
import com.coderower.hrmodule.services.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

	
	@Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Override
    public String signIn(AuthenticationRequest authenticationRequest) {
        User user = userRepository.findByEmail(authenticationRequest.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!user.getPassword().equals(authenticationRequest.getPassword())) {
            throw new UsernameNotFoundException("Invalid password");
        }

        UserDetails userDetails = new AuthUser(user);
        return jwtService.generateToken(userDetails);
    

    }
    
    
}
