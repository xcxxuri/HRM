import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeCategoryService } from 'src/app/shared/services/on-boarding/employee-category.service';

@Component({
    selector: 'app-add-employee-category',
    templateUrl: './add-employee-category.component.html',
    styleUrls: ['./add-employee-category.component.css']
})
export class AddEmployeeCategoryComponent {
    employeeCategoryForm = new FormGroup({
        // validation
        description: new FormControl('', [Validators.required])
    });

    get description() { return this.employeeCategoryForm.get('description'); }

    employeeCategory: any = {
        description: ""
    };

    saveEmployeeCategory() {
        if (this.employeeCategoryForm.valid) {
            this.employeeCategory = {
                description: this.employeeCategoryForm.value.description
            };

            this.employeeCategoryService.add(this.employeeCategory).subscribe(
                (response) => {
                    console.log('Employee added successfully:', response);
                    this.employeeCategoryForm.reset();
                    alert("Employee added successfully");
                },
                (error) => {
                    console.error('Error adding employee:', error);
                }
            );
        }
    }

    constructor(private employeeCategoryService: EmployeeCategoryService) { }


}
