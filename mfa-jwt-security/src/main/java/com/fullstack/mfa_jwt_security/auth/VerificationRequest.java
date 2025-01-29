package com.fullstack.mfa_jwt_security.auth;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class VerificationRequest {

    private String email;
    private String code;
}
