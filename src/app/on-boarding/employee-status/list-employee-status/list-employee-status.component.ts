import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeStatusService } from 'src/app/shared/services/on-boarding/employee-status.service';

@Component({
  selector: 'app-list-employee-status',
  templateUrl: './list-employee-status.component.html',
  styleUrls: ['./list-employee-status.component.css']
})
export class ListEmployeeStatusComponent {
    employeeStatuses: any = [];
    selectedEmployeeStatus: any = {
        id : '',
        description: '',
        abbr: ''
    };

    employeeStatusForm = new FormGroup({
        id: new FormControl(''),
        description: new FormControl(''),
        abbr: new FormControl('')
    });

    constructor(private employeeStatusService: EmployeeStatusService) {
        this.employeeStatusService.getAll().subscribe((data) => {
            this.employeeStatuses = data;
        });
        
    }

    onSelectEmployeeStatus(employeeStatus: any) {
        this.selectedEmployeeStatus = employeeStatus;
        this.employeeStatusForm.setValue({
            id: employeeStatus.id,
            description: employeeStatus.description,
            abbr: employeeStatus.abbr
        });
    }
}
