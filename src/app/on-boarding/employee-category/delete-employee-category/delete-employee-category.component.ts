import { Component } from '@angular/core';
import { EmployeeCategoryService } from 'src/app/shared/services/on-boarding/employee-category.service';

@Component({
  selector: 'app-delete-employee-category',
  templateUrl: './delete-employee-category.component.html',
  styleUrls: ['./delete-employee-category.component.css']
})
export class DeleteEmployeeCategoryComponent {
    employeeCategoryId: string = '';
    deleteSuccess: boolean = false;
    constructor(private employeeCategoryService : EmployeeCategoryService) { }

    deleteEmployeeCategory() {
        if (this.employeeCategoryId) {
            this.employeeCategoryService.delete(this.employeeCategoryId).subscribe(
                (response) => {
                    console.log('Employee category deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting employee category', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
