import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private getEmployeesURL: string = "http://localhost:8080/api/v1/getallemployees";
  private postSaveEmployeeURL: string = "http://localhost:8080/api/v1/saveemployee";
  private getEmployeeURL: string = "http://localhost:8080/api/v1/getemployee";
  private deleteEmployeeURL: string = "http://localhost:8080/api/v1/deleteemployee"
  private putUpdateEmployeeURL: string = "http://localhost:8080/api/v1/updateemployee";

  constructor(private _httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(this.getEmployeesURL);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>(this.postSaveEmployeeURL, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this._httpClient.put<Employee>(`${this.putUpdateEmployeeURL}/${id}`, employee);
  }

  getEmployee(id: number): Observable<Employee> {
    return this._httpClient.get<Employee>(`${this.getEmployeeURL}/${id}`).pipe(
      map(response => response)
    );
  }

  deleteEmployee(id: number): Observable<any> {
    return this._httpClient.delete(`${this.deleteEmployeeURL}/${id}`, {responseType: "text"});
  }
}
