import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
    selector: 'app-list-interview-feedback',
    templateUrl: './list-interview-feedback.component.html',
    styleUrls: ['./list-interview-feedback.component.css']
})
export class ListInterviewFeedbackComponent {
    interviewFeedbacks: any = [];
    selectedInterviewFeedback: any = {
        id: '',
        rating: '',
        comment: '',
    };
    interviewFeedbackForm = new FormGroup({
        id: new FormControl(''),
        rating: new FormControl(''),
        comment: new FormControl(''),
    });

    constructor(private interviewFeedbackService: InterviewFeedbackService) {
        this.interviewFeedbackService.getAll().subscribe((data) => {
            this.interviewFeedbacks = data;
        });
     }

    onSelectInterviewFeedback(interviewFeedback: any) {
        this.selectedInterviewFeedback = interviewFeedback;
        this.interviewFeedbackForm.setValue({
          id: interviewFeedback.id,
          rating: interviewFeedback.rating,
          comment: interviewFeedback.comment,
        });
      }


}
