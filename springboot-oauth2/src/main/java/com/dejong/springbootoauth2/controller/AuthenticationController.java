package com.dejong.springbootoauth2.controller;


import com.dejong.springbootoauth2.message.MessageResponse;
import com.dejong.springbootoauth2.payload.request.AuthenticationRequest;
import com.dejong.springbootoauth2.payload.request.RegisterRequest;
import com.dejong.springbootoauth2.payload.response.AuthenticationResponse;
import com.dejong.springbootoauth2.services.SecurityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final SecurityService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse>register(
        @RequestBody RegisterRequest request){

        return ResponseEntity.ok(service.register(request));

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse>login(
        @RequestBody AuthenticationRequest request){

        return ResponseEntity.ok(service.authenticate(request));


    }
}
