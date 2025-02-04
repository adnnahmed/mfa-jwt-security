import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private getEmployeesURL: string = "http://localhost:8080/api/v1/management/all-employees";
  private postSaveEmployeeURL: string = "http://localhost:8080/api/v1/management/save-employee";
  private getEmployeeURL: string = "http://localhost:8080/api/v1/management/get-employee";
  private deleteEmployeeURL: string = "http://localhost:8080/api/v1/management/delete-employee"
  private putUpdateEmployeeURL: string = "http://localhost:8080/api/v1/management/update-employee";

  constructor(private _httpClient: HttpClient) { }

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private createAuthHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    if (token) {
      // Add the token to the headers
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      // If no token, return empty headers
      return new HttpHeaders();
    }
  }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(this.getEmployeesURL, { headers: this.createAuthHeaders() });
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._httpClient.post<Employee>(this.postSaveEmployeeURL, employee, { headers: this.createAuthHeaders() });
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this._httpClient.put<Employee>(`${this.putUpdateEmployeeURL}/${id}`, employee, { headers: this.createAuthHeaders() });
  }

  getEmployee(id: number): Observable<Employee> {
    return this._httpClient.get<Employee>(`${this.getEmployeeURL}/${id}`, { headers: this.createAuthHeaders() }).pipe(
      map(response => response)
    );
  }

  deleteEmployee(id: number): Observable<any> {
    return this._httpClient.delete(`${this.deleteEmployeeURL}/${id}`, {headers: this.createAuthHeaders(), responseType: "text"});
  }
}
