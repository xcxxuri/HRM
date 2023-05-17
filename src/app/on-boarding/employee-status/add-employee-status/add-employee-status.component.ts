import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeStatusService } from 'src/app/shared/services/on-boarding/employee-status.service';

@Component({
  selector: 'app-add-employee-status',
  templateUrl: './add-employee-status.component.html',
  styleUrls: ['./add-employee-status.component.css']
})
export class AddEmployeeStatusComponent {
    employeeStatusForm = new FormGroup({
        // validation
        description : new FormControl('', [Validators.required]),
        abbr : new FormControl('', [Validators.required])
    });
    
    get description() { return this.employeeStatusForm.get('description'); }
    get abbr() { return this.employeeStatusForm.get('abbr'); }

    employeeStatus: any = {
        description: "",
        abbr: ""
    };

    saveEmployeeStatus() {
        if (this.employeeStatusForm.valid) {
            this.employeeStatus = {
                description: this.employeeStatusForm.value.description,
                abbr: this.employeeStatusForm.value.abbr
            };

            this.employeeStatusService.add(this.employeeStatus).subscribe(
                (response) => {
                    console.log('Employee status added successfully:', response);
                    this.employeeStatusForm.reset();
                    alert("Employee status added successfully");
                },
                (error) => {
                    console.error('Error adding employee status:', error);
                }
            );
        }
    }

    constructor(private employeeStatusService: EmployeeStatusService) { }
}
