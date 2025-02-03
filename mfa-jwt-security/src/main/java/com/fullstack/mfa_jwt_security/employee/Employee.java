package com.fullstack.mfa_jwt_security.employee;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_employee")
public class Employee {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String designation;
    private String salary;
}
