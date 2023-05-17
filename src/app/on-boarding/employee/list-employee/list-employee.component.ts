import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/on-boarding/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
    
        employees: any = [];
        selectedEmployee: any = {
            id: '',
            firstName: '',
            middleName: '',
            lastName: '',
            ssn: '',
            hireDate: '',
            endDate: '',
            employeeCategoryId: '',
            employeeStatusId: '',
            employeeRoleId: '',
            address: '',
            email: ''
        };

        employeeForm = new FormGroup({
            id: new FormControl(''),
            firstName: new FormControl(''),
            middleName: new FormControl(''),
            lastName: new FormControl(''),
            ssn: new FormControl(''),
            hireDate: new FormControl(''),
            endDate: new FormControl(''),
            employeeCategoryId: new FormControl(''),
            employeeStatusId: new FormControl(''),
            employeeRoleId: new FormControl(''),
            address: new FormControl(''),
            email: new FormControl('')
        });

    
        constructor(private employeeService: EmployeeService) {
            this.employeeService.getAll().subscribe((data) => {
                this.employees = data;
            });
        }
    
        onSelectEmployee(employee: any) {
            this.selectedEmployee = employee;
            this.employeeForm.setValue({
                id: employee.id,
                firstName: employee.firstName,
                middleName: employee.middleName,
                lastName: employee.lastName,
                ssn: employee.ssn,
                hireDate: employee.hireDate,
                endDate: employee.endDate,
                employeeCategoryId: employee.employeeCategoryId,
                employeeStatusId: employee.employeeStatusId,
                employeeRoleId: employee.employeeRoleId,
                address: employee.address,
                email: employee.email
            });
        }
}
