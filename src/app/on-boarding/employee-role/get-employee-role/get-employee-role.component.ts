import { Component } from '@angular/core';
import { EmployeeRoleService } from 'src/app/shared/services/on-boarding/employee-role.service';

@Component({
  selector: 'app-get-employee-role',
  templateUrl: './get-employee-role.component.html',
  styleUrls: ['./get-employee-role.component.css']
})
export class GetEmployeeRoleComponent {
    employeeRoleId: any = null;
    employeeRole: any = null;
    constructor(private employeeRoleService : EmployeeRoleService) { }

    ngOnInit(): void { }

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
}
