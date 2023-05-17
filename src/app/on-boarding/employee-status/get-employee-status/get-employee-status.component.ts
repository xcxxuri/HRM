import { Component } from '@angular/core';
import { EmployeeStatusService } from 'src/app/shared/services/on-boarding/employee-status.service';

@Component({
  selector: 'app-get-employee-status',
  templateUrl: './get-employee-status.component.html',
  styleUrls: ['./get-employee-status.component.css']
})
export class GetEmployeeStatusComponent {
    employeeStatusId: any = null;
    employeeStatus: any = null;
    constructor(private employeeStatusService : EmployeeStatusService) { }
    
    ngOnInit(): void { }

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
}
