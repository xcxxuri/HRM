import { Component } from '@angular/core';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-update-interviewer',
  templateUrl: './update-interviewer.component.html',
  styleUrls: ['./update-interviewer.component.css']
})
export class UpdateInterviewerComponent {

    constructor(private interviewerService:InterviewerService) { }
    interviewerId: any = null;
    updateSuccess: boolean = false;
    interviewer: any = {
        id: null,
        firatName: "",
        lastName: "",
        employeeId: "",
    };

    getInterviewer() {
        this.interviewerService.get(this.interviewerId).subscribe(
            data => {
                this.interviewer = data;
            },
            error => {
                console.error('Error getting interviewer:', error);
            }
        );
    }

    updateInterviewer() {
        this.interviewerService.update(this.interviewerId, this.interviewer).subscribe(
            data => {
                console.log('Interviewer updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating interviewer:', error);
                this.updateSuccess = false;
            }
        );
    }

}
