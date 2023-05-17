import { Component } from '@angular/core';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-delete-interview-feedback',
  templateUrl: './delete-interview-feedback.component.html',
  styleUrls: ['./delete-interview-feedback.component.css']
})
export class DeleteInterviewFeedbackComponent {
    interviewFeedbackId: string = '';
    deleteSuccess: boolean = false;
    
    constructor(private interviewFeedbackService: InterviewFeedbackService) { }
    deleteInterviewFeedback() {
        if (this.interviewFeedbackId) {
            this.interviewFeedbackService.delete(this.interviewFeedbackId).subscribe(
                (response) => {
                    console.log('InterviewFeedback deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting interviewFeedback', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
