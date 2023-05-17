import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InterviewsService } from 'src/app/shared/services/interview/interviews.service';

@Component({
  selector: 'app-list-interviews',
  templateUrl: './list-interviews.component.html',
  styleUrls: ['./list-interviews.component.css']
})
export class ListInterviewsComponent {

    interviews: any = [];

    selectedInterviews: any = {
        id: '',
        recruiterId: '',
        submissionId: '',
        interviewTypeId: '',
        interviewRound: '',
        schduledOn: '',
        interviewerId: '',
        feedbackId: '' 
    };
    interviewsForm = new FormGroup({
        id: new FormControl(''),
        recruiterId: new FormControl(''),
        submissionId: new FormControl(''),
        interviewTypeId: new FormControl(''),
        interviewRound: new FormControl(''),
        schduledOn: new FormControl(''),
        interviewerId: new FormControl(''),
        feedbackId: new FormControl('')
    });

    
    constructor(private interviewsService : InterviewsService) {
        this.interviewsService.getAll().subscribe((data) => {
            this.interviews = data;
        });
     }
    
    onSelectInterviews(interview: any) {
        this.selectedInterviews = interview;
        this.interviewsForm.setValue({
            id: interview.id,
            recruiterId: interview.recruiterId,
            submissionId: interview.submissionId,
            interviewTypeId: interview.interviewTypeId,
            interviewRound: interview.interviewRound,
            schduledOn: interview.schduledOn,
            interviewerId: interview.interviewerId,
            feedbackId: interview.feedbackId
        });
    }
}
