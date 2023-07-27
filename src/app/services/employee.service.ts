import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  getEmployees(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`)
  }
  postEmployees(data:any): Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}/${environment.prefix}/employees`,data);
  }
  getEmployee(employeeId: number):Observable<any>{
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/${employeeId}`);
  }
  getEmployeesByDepartment(departmentId: number):Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/by/${departmentId}`);
  }
}
