package com.fullstack.mfa_jwt_security.exception;

import java.time.LocalDateTime;

public record ApiError(
        String path,
        String message,
        int statusCode,
        LocalDateTime localDateTime
) {
}
