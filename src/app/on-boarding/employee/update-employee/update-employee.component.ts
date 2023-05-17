import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/on-boarding/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
        constructor(private employeeService:EmployeeService) { }
        employeeId: any = null;
        updateSuccess: boolean = false;
        employee: any = {
            id: null,
            firatName: "",
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
    
        getEmployee() {
            this.employeeService.get(this.employeeId).subscribe(
                data => {
                    this.employee = data;
                },
                error => {
                    console.error('Error getting employee:', error);
                }
            );
        }

        updateEmployee() {
            this.employeeService.update(this.employeeId, this.employee).subscribe(
                data => {
                    console.log('Employee updated successfully:', data);
                    this.updateSuccess = true;
                },
                error => {
                    console.error('Error updating employee:', error);
                    this.updateSuccess = false;
                }
            );
        }
}
