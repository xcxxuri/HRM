import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeCategoryService } from 'src/app/shared/services/on-boarding/employee-category.service';

@Component({
  selector: 'app-list-employee-category',
  templateUrl: './list-employee-category.component.html',
  styleUrls: ['./list-employee-category.component.css']
})
export class ListEmployeeCategoryComponent {
    employeeCategories: any = [];
    selectedEmployeeCategory: any = {
        id: '',
        description: ''
    };
    employeeCategoryForm = new FormGroup({
        id: new FormControl(''),
        description: new FormControl('')
    });
    
    constructor(private employeeCategoryService: EmployeeCategoryService) {
        this.employeeCategoryService.getAll().subscribe((data) => {
            this.employeeCategories = data;
        });
    }

    onSelectEmployeeCategory(employeeCategory: any) {
        this.selectedEmployeeCategory = employeeCategory;
        this.employeeCategoryForm.setValue({
            id: employeeCategory.id,
            description: employeeCategory.description
        });
    }


}
