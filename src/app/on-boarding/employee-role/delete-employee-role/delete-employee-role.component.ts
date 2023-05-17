import { Component } from '@angular/core';
import { EmployeeRoleService } from 'src/app/shared/services/on-boarding/employee-role.service';

@Component({
  selector: 'app-delete-employee-role',
  templateUrl: './delete-employee-role.component.html',
  styleUrls: ['./delete-employee-role.component.css']
})
export class DeleteEmployeeRoleComponent {
    employeeRoleId: string = '';
    deleteSuccess: boolean = false;
    constructor(private employeeRoleService : EmployeeRoleService) { }
    
    deleteEmployeeRole() {
        if (this.employeeRoleId) {
            this.employeeRoleService.delete(this.employeeRoleId).subscribe(
                (response) => {
                    console.log('Employee role deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting employee role', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
