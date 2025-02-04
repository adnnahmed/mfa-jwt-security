package com.fullstack.mfa_jwt_security.employee;

public class EmployeeNotFoundException extends RuntimeException {

    public EmployeeNotFoundException(Long id) {
        super("Employee with ID " + id + " not found.");
    }
}
