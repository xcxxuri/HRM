import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private httpclient: HttpClient) {
    }

    getAll() {
        return this.httpclient.get('http://localhost:50124/api/Employee/GetAllEmployees');
    }

    delete(id: any) {
        // http://localhost:50123/api/Candidate/1 DeleteCandidate
        return this.httpclient.delete('http://localhost:50124/api/Employee/' + id + '/DeleteEmployee');
    }

    add(employee: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50124/api/Employee/AddEmployee', JSON.stringify(employee), httpOptions);
    }

    update(id: any, employee: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50124/api/Employee/${id}/UpdateEmployee', JSON.stringify(employee), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50124/api/Employee/' + id + '/GetEmployeeById');
    }
}
