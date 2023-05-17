import { Component } from '@angular/core';
import { EmployeeStatusService } from 'src/app/shared/services/on-boarding/employee-status.service';

@Component({
  selector: 'app-update-employee-status',
  templateUrl: './update-employee-status.component.html',
  styleUrls: ['./update-employee-status.component.css']
})
export class UpdateEmployeeStatusComponent {
    constructor(private employeeStatusService: EmployeeStatusService) { }
    employeeStatusId: string = '';
    updateSuccess: boolean = false;
    employeeStatus: any = {
        id: null,
        description: "",
        abbr: ""
    };

    getEmployeeStatus() {
        this.employeeStatusService.get(this.employeeStatusId).subscribe(
            data => {
                this.employeeStatus = data;
            },
            error => {
                console.error('Error getting employee status:', error);
            }
        );
    }

    updateEmployeeStatus() {
        this.employeeStatusService.update(this.employeeStatusId, this.employeeStatus).subscribe(
            data => {
                console.log('Employee status updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating employee status:', error);
                this.updateSuccess = false;
            }
        );
    }

}
