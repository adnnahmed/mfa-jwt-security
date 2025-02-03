package com.fullstack.mfa_jwt_security.employee;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.IllegalBlockSizeException;
import java.util.List;

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
    public Employee save(Employee employee) throws IllegalBlockSizeException {
        String input = employee.getSalary();
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

        // employee.setSalary(encryptSalary(modifiedSalary));
        employeeRepository.save(employee);
        return employee;
    }

    @Override
    public Employee findById(Long id) {
        if (employeeRepository.findById(id).isPresent()) {
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
        }
    }

    @Override
    public Employee update(Long id, Employee employee) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
