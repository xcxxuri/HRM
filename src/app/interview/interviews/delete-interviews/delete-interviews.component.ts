import { Component } from '@angular/core';
import { InterviewsService } from 'src/app/shared/services/interview/interviews.service';

@Component({
  selector: 'app-delete-interviews',
  templateUrl: './delete-interviews.component.html',
  styleUrls: ['./delete-interviews.component.css']
})
export class DeleteInterviewsComponent {
    interviewsId: string = '';
    deleteSuccess: boolean = false;
    constructor(private interviewsService: InterviewsService) { };

    deleteInterviews() {
        if (this.interviewsId) {
            this.interviewsService.delete(this.interviewsId).subscribe(
                (response) => {
                    console.log('Interviews deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting interviews', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }


}
