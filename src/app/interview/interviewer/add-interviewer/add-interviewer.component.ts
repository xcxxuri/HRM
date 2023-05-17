import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-add-interviewer',
  templateUrl: './add-interviewer.component.html',
  styleUrls: ['./add-interviewer.component.css']
})
export class AddInterviewerComponent {
    interviewerForm = new FormGroup({
        // validation
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        employeeId: new FormControl('', [Validators.required])
    });

    get firstName() { return this.interviewerForm.get('firstName'); }
    get lastName() { return this.interviewerForm.get('lastName'); }
    get employeeId() { return this.interviewerForm.get('employeeId'); }
    
    interviewer: any = {
        firstName: "",
        lastName: "",
        employeeId: ""
    };

    saveInterviewer() {
        if (this.interviewerForm.valid) {
            this.interviewer = {
                firstName: this.interviewerForm.value.firstName,
                lastName: this.interviewerForm.value.lastName,
                employeeId: this.interviewerForm.value.employeeId
            };
            
            this.interviewerService.add(this.interviewer).subscribe(
                (response) => {
                    console.log('Interviewer added successfully:', response);
                    this.interviewerForm.reset();
                    alert("Interviewer added successfully");
                },
                (error) => {
                    console.error('Error adding interviewer:', error);
                }
            );
        }
    }

    constructor(private interviewerService : InterviewerService) { }
}
