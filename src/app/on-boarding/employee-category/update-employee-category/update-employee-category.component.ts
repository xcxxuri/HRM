import { Component } from '@angular/core';
import { EmployeeCategoryService } from 'src/app/shared/services/on-boarding/employee-category.service';

@Component({
  selector: 'app-update-employee-category',
  templateUrl: './update-employee-category.component.html',
  styleUrls: ['./update-employee-category.component.css']
})
export class UpdateEmployeeCategoryComponent {
    constructor(private employeeCategoryService:EmployeeCategoryService) { }
    employeeCategoryId: any = null;
    updateSuccess: boolean = false;
    employeeCategory: any = {
        id: null,
        description: ""
    };

    getEmployeeCategory() {
        this.employeeCategoryService.get(this.employeeCategoryId).subscribe(
            data => {
                this.employeeCategory = data;
            },
            error => {
                console.error('Error getting employee category:', error);
            }
        );
    }

    updateEmployeeCategory() {
        this.employeeCategoryService.update(this.employeeCategoryId, this.employeeCategory).subscribe(
            data => {
                console.log('Employee category updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating employee category:', error);
                this.updateSuccess = false;
            }
        );
    }
    
}
