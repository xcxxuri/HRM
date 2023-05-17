import { Component } from '@angular/core';
import { EmployeeCategoryService } from 'src/app/shared/services/on-boarding/employee-category.service';

@Component({
  selector: 'app-get-employee-category',
  templateUrl: './get-employee-category.component.html',
  styleUrls: ['./get-employee-category.component.css']
})
export class GetEmployeeCategoryComponent {
    employeeCategoryId: any = null;
    employeeCategory: any = null;
    constructor(private employeeCategoryService : EmployeeCategoryService) { }

    ngOnInit(): void { }

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
}
