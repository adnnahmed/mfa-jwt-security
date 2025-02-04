package com.fullstack.mfa_jwt_security.employee;

import javax.crypto.IllegalBlockSizeException;
import java.util.List;

public interface EmployeeService {

    List<Employee> findAll();
    Employee save(Employee employee);
    Employee findById(Long id);
    Employee update(Long id, Employee employee);
    void delete(Long id);
}
