import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRoleService {

  constructor(private httpclient: HttpClient) {}

    getAll() {
        return this.httpclient.get('http://localhost:50124/api/EmployeeRole/GetAllEmployeeRoles');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50124/api/EmployeeRole/' + id + '/DeleteEmployeeRole');
    }

    add(employeeRole: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50124/api/EmployeeRole/AddEmployeeRole', JSON.stringify(employeeRole), httpOptions);
    }

    update(id: any, employeeRole: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50124/api/EmployeeRole/${id}/UpdateEmployeeRole', JSON.stringify(employeeRole), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50124/api/EmployeeRole/' + id + '/GetEmployeeRoleById');
    }
    
  
}
