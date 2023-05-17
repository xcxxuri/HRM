import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-list-recruiter',
  templateUrl: './list-recruiter.component.html',
  styleUrls: ['./list-recruiter.component.css']
})
export class ListRecruiterComponent {
    recruiters: any = [];
    selectedRecruiter: any = {
        id: '',
        firstName: '',
        lastName: '',
        employeeId: '',
    };
    recruiterForm = new FormGroup({
        id: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        employeeId: new FormControl(''),
    });

    constructor(private recruiterService: RecruiterService) {
        this.recruiterService.getAll().subscribe((data) => {
            this.recruiters = data;
        });
    }

    onSelectRecruiter(recruiter: any) {
        this.selectedRecruiter = recruiter;
        this.recruiterForm.setValue({
            id: recruiter.id,
            firstName: recruiter.firstName,
            lastName: recruiter.lastName,
            employeeId: recruiter.employeeId,
        });
    }


}
