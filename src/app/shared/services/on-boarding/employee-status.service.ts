import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeStatusService {

  constructor(private httpclient: HttpClient) {}

    getAll() {
        return this.httpclient.get('http://localhost:50124/api/EmployeeStatus/GetAllEmployeeStatuses');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50124/api/EmployeeStatus/' + id + '/DeleteEmployeeStatus');
    }

    add(employeeStatus: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50124/api/EmployeeStatus/AddEmployeeStatus', JSON.stringify(employeeStatus), httpOptions);
    }

    update(id: any, employeeStatus: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50124/api/EmployeeStatus/${id}/UpdateEmployeeStatus', JSON.stringify(employeeStatus), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50124/api/EmployeeStatus/' + id + '/GetEmployeeStatusById');
    }

}
