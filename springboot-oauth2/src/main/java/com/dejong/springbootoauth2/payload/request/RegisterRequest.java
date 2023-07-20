package com.dejong.springbootoauth2.payload.request;


import lombok.*;

import java.util.Set;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String username;
    private  String email;
    private Set<String> role;
    private String password;
}
