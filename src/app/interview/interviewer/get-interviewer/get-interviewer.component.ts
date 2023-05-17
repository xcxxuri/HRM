import { Component } from '@angular/core';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-get-interviewer',
  templateUrl: './get-interviewer.component.html',
  styleUrls: ['./get-interviewer.component.css']
})
export class GetInterviewerComponent {

    interviewerId: any = null;
    interviewer: any = null;
    constructor(private interviewerService : InterviewerService) { }

    ngOnInit(): void { }

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
}
