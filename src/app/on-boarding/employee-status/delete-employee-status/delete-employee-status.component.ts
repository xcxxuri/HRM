import { Component } from '@angular/core';
import { EmployeeStatusService } from 'src/app/shared/services/on-boarding/employee-status.service';

@Component({
  selector: 'app-delete-employee-status',
  templateUrl: './delete-employee-status.component.html',
  styleUrls: ['./delete-employee-status.component.css']
})
export class DeleteEmployeeStatusComponent {
    employeeStatusId: string = '';
    deleteSuccess: boolean = false;
    constructor(private employeeStatusService : EmployeeStatusService) { }
    
    deleteEmployeeStatus() {
        if (this.employeeStatusId) {
            this.employeeStatusService.delete(this.employeeStatusId).subscribe(
                (response) => {
                    console.log('Employee status deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting employee status', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
