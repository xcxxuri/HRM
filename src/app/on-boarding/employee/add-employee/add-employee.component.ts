import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/services/on-boarding/employee.service';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
    employeeForm = new FormGroup({
        // validation
        firstName: new FormControl('', [Validators.required]),
        middleName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        ssn: new FormControl('', [Validators.required]),
        hireDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        employeeCategoryId: new FormControl('', [Validators.required]),
        employeeStatusId: new FormControl('', [Validators.required]),
        employeeRoleId: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required])
    });

    get firstName() { return this.employeeForm.get('firstName'); }
    get middleName() { return this.employeeForm.get('middleName'); }
    get lastName() { return this.employeeForm.get('lastName'); }
    get ssn() { return this.employeeForm.get('ssn'); }
    get hireDate() { return this.employeeForm.get('hireDate'); }
    get endDate() { return this.employeeForm.get('endDate'); }
    get employeeCategoryId() { return this.employeeForm.get('employeeCategoryId'); }
    get employeeStatusId() { return this.employeeForm.get('employeeStatusId'); }
    get employeeRoleId() { return this.employeeForm.get('employeeRoleId'); }
    get address() { return this.employeeForm.get('address'); }
    get email() { return this.employeeForm.get('email'); }

    employee: any = {
        firstName: "",
        middleName: "",
        lastName: "",
        ssn: "",
        hireDate: "",
        endDate: "",
        employeeCategoryId: "",
        employeeStatusId: "",
        employeeRoleId: "",
        address: "",
        email: ""
    };

    saveEmployee() {
        if (this.employeeForm.valid) {
            this.employee = {
                firstName: this.employeeForm.value.firstName,
                middleName: this.employeeForm.value.middleName,
                lastName: this.employeeForm.value.lastName,
                ssn: this.employeeForm.value.ssn,
                hireDate: this.employeeForm.value.hireDate,
                endDate: this.employeeForm.value.endDate,
                employeeCategoryId: this.employeeForm.value.employeeCategoryId,
                employeeStatusId: this.employeeForm.value.employeeStatusId,
                employeeRoleId: this.employeeForm.value.employeeRoleId,
                address: this.employeeForm.value.address,
                email: this.employeeForm.value.email
            };
            
            this.employeeService.add(this.employee).subscribe(
                (response) => {
                    console.log('Employee added successfully:', response);
                    this.employeeForm.reset();
                    alert("Employee added successfully");
                },
                (error) => {
                    console.error('Error adding employee:', error);
                }
            );
        }
    }

    constructor(private employeeService : EmployeeService) { }
}
