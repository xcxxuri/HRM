import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
    selector: 'app-list-interviewer',
    templateUrl: './list-interviewer.component.html',
    styleUrls: ['./list-interviewer.component.css']
})
export class ListInterviewerComponent {

    interviewers: any = [];
    selectedInterviewer: any = {
        id: '',
        firstName: '',
        lastName: '',
        employeeId: '',
    };
    interviewerForm = new FormGroup({
        id: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        employeeId: new FormControl(''),
    });

    constructor(private interviewerService: InterviewerService) {
        this.interviewerService.getAll().subscribe((data) => {
            this.interviewers = data;
        });
    }

    onSelectInterviewer(interviewer: any) {
        this.selectedInterviewer = interviewer;
        this.interviewerForm.setValue({
            id: interviewer.id,
            firstName: interviewer.firstName,
            lastName: interviewer.lastName,
            employeeId: interviewer.employeeId,
        });
    }

}
