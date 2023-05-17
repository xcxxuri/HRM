import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/on-boarding/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent {
    
        employeeId: any = null;
        employee: any = null;
        constructor(private employeeService : EmployeeService) { }
    
        ngOnInit(): void { }
    
        getEmployee() {
            this.employeeService.get(this.employeeId).subscribe(
                data => {
                    this.employee = data;
                },
                error => {
                    console.error('Error getting employee:', error);
                }
            );
        }
}
