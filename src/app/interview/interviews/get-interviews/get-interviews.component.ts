import { Component } from '@angular/core';
import { InterviewsService } from 'src/app/shared/services/interview/interviews.service';

@Component({
  selector: 'app-get-interviews',
  templateUrl: './get-interviews.component.html',
  styleUrls: ['./get-interviews.component.css']
})
export class GetInterviewsComponent {

    interviewsId: any = null;
    interviews: any = null;
    constructor(private interviewsService : InterviewsService) { }

    ngOnInit(): void { }

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
}
