package com.coderower.hrmodule.api.auth;

import com.coderower.hrmodule.models.auth.AuthenticationRequest;
import com.coderower.hrmodule.services.JwtService;
import com.coderower.hrmodule.services.auth.AuthenticationService;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService service;

    @Autowired
    JwtService jwtService;
    
    @PostMapping("/sign-n")
    public ResponseEntity<String> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.signIn(request));
    }
    
    //implementation of parseid endpoint
    @PostMapping(value = "/jwt/decode", consumes = MediaType.TEXT_PLAIN_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public String extractIdFromJwt(@RequestBody String token) throws UnsupportedEncodingException {
        try {
            String payload = token.split("\\.")[1];
            String decodedPayload = new String(Base64.getUrlDecoder().decode(payload), StandardCharsets.UTF_8);

            // Parse the JSON payload to extract the "id" field
            String id = jwtService.parseIdFromJsonPayload(decodedPayload);

            return "{\"id\":\"" + id + "\"}";
        } catch (Exception e) {
            return "{\"error\":\"Invalid token or unable to extract id\"}";
        }
    }
}
