package com.dejong.springbootoauth2.payload.response;


import lombok.*;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class  AuthenticationResponse {

    private String token;
}
