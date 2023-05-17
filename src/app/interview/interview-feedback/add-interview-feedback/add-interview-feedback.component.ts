import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterviewFeedbackService } from 'src/app/shared/services/interview/interview-feedback.service';

@Component({
  selector: 'app-add-interview-feedback',
  templateUrl: './add-interview-feedback.component.html',
  styleUrls: ['./add-interview-feedback.component.css']
})
export class AddInterviewFeedbackComponent {
    interviewFeedbackForm = new FormGroup({
        // validation 
        rating: new FormControl('',[Validators.required]),
        comment: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });

    get rating() { return this.interviewFeedbackForm.get('rating'); }
    get comment() { return this.interviewFeedbackForm.get('comment'); }

    interviewfeedback: any = {
        rating: "",
        comment: ""
    };

    saveInterviewFeedback() {
        if (this.interviewFeedbackForm.valid) {
            this.interviewfeedback = {
                rating: this.interviewFeedbackForm.value.rating,
                comment: this.interviewFeedbackForm.value.comment
            };
            
            this.interviewFeedbackService.add(this.interviewfeedback).subscribe(
                (response) => {
                    console.log('InterviewFeedback added successfully:', response);
                    this.interviewFeedbackForm.reset();
                    alert("InterviewFeedback added successfully");
                },
                (error) => {
                    console.error('Error adding interviewfeedback:', error);
                }
            );
        }
    }

    constructor(private interviewFeedbackService : InterviewFeedbackService) { }

}
