import { Component } from '@angular/core';
import { EmployeeRoleService } from 'src/app/shared/services/on-boarding/employee-role.service';

@Component({
    selector: 'app-update-employee-role',
    templateUrl: './update-employee-role.component.html',
    styleUrls: ['./update-employee-role.component.css']
})
export class UpdateEmployeeRoleComponent {

    constructor(private employeeRoleService: EmployeeRoleService) { }
    employeeRoleId: string = '';
    updateSuccess: boolean = false;
    employeeRole: any = {
        id: null,
        employeeRoleName: "",
        abbr: ""
    };

    getEmployeeRole() {
        this.employeeRoleService.get(this.employeeRoleId).subscribe(
            data => {
                this.employeeRole = data;
            },
            error => {
                console.error('Error getting employee role:', error);
            }
        );
    }

    updateEmployeeRole() {
        this.employeeRoleService.update(this.employeeRoleId, this.employeeRole).subscribe(
            data => {
                console.log('Employee role updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating employee role:', error);
                this.updateSuccess = false;
            }
        );
    }
    
}
