import { Component } from '@angular/core';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-update-submission-status',
  templateUrl: './update-submission-status.component.html',
  styleUrls: ['./update-submission-status.component.css']
})
export class UpdateSubmissionStatusComponent {
    
      constructor(private submissionStatusService: SubmissionStatusService) { }
        submissionStatusId: string = '';
        updateSuccess: boolean = false;
        submissionStatus: any = {
            id: null,
            description: '',
        };

        getSubmissionStatus() {
            this.submissionStatusService.get(this.submissionStatusId).subscribe(
                data => {
                    this.submissionStatus = data;
                },
                error => {
                    console.error('Error getting submissionStatus:', error);
                }
            );
        }

        updateSubmissionStatus() {
            this.submissionStatusService.update(this.submissionStatusId, this.submissionStatus).subscribe(
                data => {
                    console.log('Submission status updated successfully:', data);
                    this.updateSuccess = true;
                },
                error => {
                    console.error('Error updating submission status:', error);
                    this.updateSuccess = false;
                }
            );
        }
}
