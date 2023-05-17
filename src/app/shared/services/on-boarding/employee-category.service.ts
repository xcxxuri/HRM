import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCategoryService {

  constructor(private httpclient: HttpClient) {}
  
    getAll() {
        return this.httpclient.get('http://localhost:50124/api/EmployeeCategory/GetAllEmployeeCategories');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50124/api/EmployeeCategory/' + id + '/DeleteEmployeeCategory');
    }

    add(employeeCategory: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50124/api/EmployeeCategory/AddEmployeeCategory', JSON.stringify(employeeCategory), httpOptions);
    }

    update(id: any, employeeCategory: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50124/api/EmployeeCategory/${id}/UpdateEmployeeCategory', JSON.stringify(employeeCategory), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50124/api/EmployeeCategory/' + id + '/GetEmployeeCategoryById');
    }


}
