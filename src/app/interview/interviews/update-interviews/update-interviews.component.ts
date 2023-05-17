import { Component } from '@angular/core';
import { InterviewsService } from 'src/app/shared/services/interview/interviews.service';

@Component({
  selector: 'app-update-interviews',
  templateUrl: './update-interviews.component.html',
  styleUrls: ['./update-interviews.component.css']
})
export class UpdateInterviewsComponent {
    constructor(private interviewsService:InterviewsService) { }
    interviewsId: any = null;
    updateSuccess: boolean = false;
    interviews: any = {
        id: null,
        recruiterId: "",
        submissionId: "",
        interviewTypeId: "",
        interviewRound: "",
        schduledOn: "",
        interviewerId: "",
        feedbackId: ""
    };

    getInterviews() {
        this.interviewsService.get(this.interviewsId).subscribe(
            data => {
                this.interviews = data;
            },
            error => {
                console.error('Error getting interviews:', error);
            }
        );
    }

    updateInterviews() {
        this.interviewsService.update(this.interviewsId, this.interviews).subscribe(
            data => {
                console.log('Interviews updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating interviews:', error);
                this.updateSuccess = false;
            }
        );
    }

}
