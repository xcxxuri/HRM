import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeRoleService } from 'src/app/shared/services/on-boarding/employee-role.service';

@Component({
  selector: 'app-list-employee-role',
  templateUrl: './list-employee-role.component.html',
  styleUrls: ['./list-employee-role.component.css']
})
export class ListEmployeeRoleComponent {
    employeeRoles: any = [];
    selectedEmployeeRole: any = {
        id : '',
        employeeRoleName: '',
        abbr: ''
    };

    employeeRoleForm = new FormGroup({
        id: new FormControl(''),
        employeeRoleName: new FormControl(''),
        abbr: new FormControl('')
    });
    
    
    constructor(private employeeRoleService: EmployeeRoleService) {
        this.employeeRoleService.getAll().subscribe((data) => {
            this.employeeRoles = data;
        });
    }

    onSelectEmployeeRole(employeeRole: any) {
        this.selectedEmployeeRole = employeeRole;
        this.employeeRoleForm.setValue({
            id: employeeRole.id,
            employeeRoleName: employeeRole.employeeRoleName,
            abbr: employeeRole.abbr
        });
    }
}
