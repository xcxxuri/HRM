import { Component } from '@angular/core';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-update-interview-feedback',
  templateUrl: './update-interview-feedback.component.html',
  styleUrls: ['./update-interview-feedback.component.css']
})
export class UpdateInterviewFeedbackComponent {


      constructor(private interviewFeedbackService : InterviewFeedbackService) { }
        interviewFeedbackId: any = null;
        updateSuccess: boolean = false;
        interviewFeedback: any = {
            id: null,
            rating: "",
            comment: "",
        };

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

        updateInterviewFeedback() {
            this.interviewFeedbackService.update(this.interviewFeedbackId, this.interviewFeedback).subscribe(
                data => {
                    console.log('InterviewFeedback updated successfully:', data);
                    this.updateSuccess = true;
                },
                error => {
                    console.error('Error updating interviewFeedback:', error);
                    this.updateSuccess = false;
                }
            );
        }

}
