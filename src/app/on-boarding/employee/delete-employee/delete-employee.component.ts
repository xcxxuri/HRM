import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/on-boarding/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
    employeeId: string = '';
    deleteSuccess: boolean = false;
    constructor(private employeeService : EmployeeService) { }

    deleteEmployee() {
        if (this.employeeId) {
            this.employeeService.delete(this.employeeId).subscribe(
                (response) => {
                    console.log('Employee deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting employee', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
