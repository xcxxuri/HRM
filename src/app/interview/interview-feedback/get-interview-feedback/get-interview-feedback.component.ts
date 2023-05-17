import { Component } from '@angular/core';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-get-interview-feedback',
  templateUrl: './get-interview-feedback.component.html',
  styleUrls: ['./get-interview-feedback.component.css']
})
export class GetInterviewFeedbackComponent {
    interviewFeedbackId: any = null;
    interviewFeedback: any = null;
    
    constructor(private interviewFeedbackService : InterviewFeedbackService) { }

    ngOnInit(): void { }
    
    getInterviewFeedback() {
        this.interviewFeedbackService.get(this.interviewFeedbackId).subscribe(
            data => {
                this.interviewFeedback = data;
            },
            error => {
                console.error('Error getting interviewFeedback:', error);
            }
        );
    }

}
