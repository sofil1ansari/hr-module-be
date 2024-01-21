package com.coderower.hrmodule.api.auth;

import com.coderower.hrmodule.models.auth.AuthenticationRequest;
import com.coderower.hrmodule.services.JwtService;
import com.coderower.hrmodule.services.auth.AuthenticationService;
import com.coderower.hrmodule.services.auth.CustomUserDetailsService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

	    @Autowired
	    private AuthenticationManager authenticationManager;

	    @Autowired
	    private CustomUserDetailsService customUserDetailsService;

	    @Autowired
	    private JwtService jwtService;

	    @Autowired
	    private AuthenticationService authenticationService;

	    @PostMapping("/sign-n")
	    public ResponseEntity<String> authenticate(
	            @RequestBody AuthenticationRequest request
	    ) {
	        return ResponseEntity.ok(authenticationService.signIn(request));
	    }

	    @PostMapping("/authenticate")
	    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
	            throws Exception {

	        final Authentication authentication = authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
	        );

	        final UserDetails userDetails = customUserDetailsService.loadUserByUsername(authenticationRequest.getEmail());

	        final String token = jwtService.generateToken(userDetails);

	        return ResponseEntity.ok(new AuthenticationResponse(token));
	    }
}
