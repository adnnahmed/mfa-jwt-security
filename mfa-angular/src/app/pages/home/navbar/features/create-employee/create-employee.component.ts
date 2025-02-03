import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../../../services/employee.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  data: any;

  constructor(
    private formBuilder: FormBuilder, 
    private _employeeService: EmployeeService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  ngOnInit(): void {
    // this.employeeForm.patchValue(this.data);
    this.route.data.subscribe(data => {
      this.data = data; // You can now access the data passed through the route
      this.employeeForm.patchValue(this.data);
    });
  }

  onSubmit(): void {
    if(this.employeeForm.valid) {
      if (this.data) {
        this._employeeService.updateEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: (value: any) => {
            console.log(value);
            alert('Employee Updated Successfully');
            this.redirectTo('create-employee');
          },
          error: (err: any) =>  {
            console.log(err);
          }
        })
      } else {
        this._employeeService.addEmployee(this.employeeForm.value).subscribe({
          next: (value: any) => {
            console.log(value);
            alert('Employee Added Successfully');
            this.redirectTo('create-employee');   
          },
          error: (err: any) =>  {
            console.log(err);
          }
        })
        
      }
    }
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
}
