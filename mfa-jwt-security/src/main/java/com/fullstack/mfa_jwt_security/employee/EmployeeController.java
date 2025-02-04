package com.fullstack.mfa_jwt_security.employee;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.IllegalBlockSizeException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http//localhost:4200")
@RequestMapping("/api/v1/management")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/all-employees")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employeeDetailsList = employeeService.findAll();
        return new ResponseEntity<>(employeeDetailsList, HttpStatus.OK);
    }

    @PostMapping("/save-employee")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) throws IllegalBlockSizeException {
        Employee savedEmployee = employeeService.save(employee);
        return new ResponseEntity<>(savedEmployee, HttpStatus.OK);
    }

    @GetMapping("/get-employee/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable("id") Long id) {
        Employee employee = employeeService.findById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PutMapping("/update-employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Long id, @RequestBody Employee employee) throws IllegalBlockSizeException {
        Employee updatedEmployee = employeeService.update(id, employee);
        return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete-employee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long id) {
        employeeService.delete(id);
        return new ResponseEntity<>("Salary Record Deleted", HttpStatus.OK);
    }
}
