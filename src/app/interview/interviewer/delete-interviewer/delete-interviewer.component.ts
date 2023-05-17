import { Component } from '@angular/core';
import { InterviewerService } from 'src/app/shared/services/interview/interviewer.service';

@Component({
  selector: 'app-delete-interviewer',
  templateUrl: './delete-interviewer.component.html',
  styleUrls: ['./delete-interviewer.component.css']
})
export class DeleteInterviewerComponent {
    interviewerId: string = '';
    deleteSuccess: boolean = false;
    constructor(private interviewerService : InterviewerService) { }

    deleteInterviewer() {
        if (this.interviewerId) {
            this.interviewerService.delete(this.interviewerId).subscribe(
                (response) => {
                    console.log('Interviewer deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting interviewer', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
