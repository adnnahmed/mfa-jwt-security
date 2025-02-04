package com.fullstack.mfa_jwt_security.employee;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.IllegalBlockSizeException;
import java.util.List;
import java.util.Objects;

import static org.apache.commons.lang3.StringUtils.isNumeric;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImplementation implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee save(Employee employee) {
        /*String input = employee.getSalary();
        String modifiedSalary = "";

        if (isNumeric(input)) {
            // If the length is less than or equal to 5, add leading zeros to make the length 6
            if (input.length() <= 5) {
                // Add leading zeros
                modifiedSalary = String.format("%06d", Integer.parseInt(input));
            } else {
                throw new IllegalBlockSizeException();
            }
        } else {
            throw new NumberFormatException();
        }
        */

        // employee.setSalary(encryptSalary(modifiedSalary));
        employeeRepository.save(employee);
        return employee;
    }

    @Override
    public Employee findById(Long id) {
        /*if (employeeRepository.findById(id).isPresent()) {
            EmployeeDetails actualDetails = employeeRepository.findById(id).get();
            String fakeSalary = actualDetails.getSalary();
            String decryptedSalary = decryptSalary(fakeSalary);
            actualDetails.setSalary(decryptedSalary);

            String modifiedDecryptedSalary = "";

            if (isNumeric(decryptedSalary)) {
                // Remove leading zeros
                modifiedDecryptedSalary = removeLeadingZeros(decryptedSalary);
            } else {
                throw new NumberFormatException();
            }

            actualDetails.setSalary(modifiedDecryptedSalary);
            return actualDetails;
        } else {
            return null;
        }*/
        if (employeeRepository.findById(id).isEmpty()) {
            throw new EmployeeNotFoundException(id);
        }
        return employeeRepository.findById(id).get();
    }

    @Override
    public Employee update(Long id, Employee employee) {
        Employee updatedEmployee = findById(id);
        if (Objects.nonNull(employee.getName()) && !"".equalsIgnoreCase(employee.getName())) {
            updatedEmployee.setName(employee.getName());
        }
        if (Objects.nonNull(employee.getDesignation()) && !"".equalsIgnoreCase(employee.getDesignation())) {
            updatedEmployee.setDesignation(employee.getDesignation());
        }
        if (Objects.nonNull(employee.getSalary()) && !"".equalsIgnoreCase(employee.getSalary())) {
            updatedEmployee.setSalary(employee.getSalary());
        }

        return save(updatedEmployee);
    }

    @Override
    public void delete(Long id) {
        if (employeeRepository.findById(id).isEmpty()) {
            throw new EmployeeNotFoundException(id);
        }
        Employee employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
    }
}
