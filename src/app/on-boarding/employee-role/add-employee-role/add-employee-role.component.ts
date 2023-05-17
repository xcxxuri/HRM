import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeRoleService } from 'src/app/shared/services/on-boarding/employee-role.service';

@Component({
  selector: 'app-add-employee-role',
  templateUrl: './add-employee-role.component.html',
  styleUrls: ['./add-employee-role.component.css']
})
export class AddEmployeeRoleComponent {
        employeeRoleForm = new FormGroup({
            // validation
            employeeRoleName: new FormControl('', [Validators.required]),
            abbr: new FormControl('', [Validators.required])
        });

        get employeeRoleName() { return this.employeeRoleForm.get('employeeRoleName'); }
        get abbr() { return this.employeeRoleForm.get('abbr'); }

        employeeRole: any = {
            employeeRoleName: "",
            abbr: ""
        };
    
        saveEmployeeRole() {
            if (this.employeeRoleForm.valid) {
                this.employeeRole = {
                    employeeRoleName: this.employeeRoleForm.value.employeeRoleName,
                    abbr: this.employeeRoleForm.value.abbr
                };
    
                this.employeeRoleService.add(this.employeeRole).subscribe(
                    (response) => {
                        console.log('Employee role added successfully:', response);
                        this.employeeRoleForm.reset();
                        alert("Employee role added successfully");
                    },
                    (error) => {
                        console.error('Error adding employee role:', error);
                    }
                );
            }
        }
    
        constructor(private employeeRoleService: EmployeeRoleService) { }
}
