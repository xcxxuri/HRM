import { Component } from '@angular/core';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-delete-submission-status',
  templateUrl: './delete-submission-status.component.html',
  styleUrls: ['./delete-submission-status.component.css']
})
export class DeleteSubmissionStatusComponent {
    submissionStatusId: string = '';
    deleteSuccess: boolean = false;
    constructor(private submissionStatusService: SubmissionStatusService) { }
    deleteSubmissionStatus() {
        if (this.submissionStatusId) {
            this.submissionStatusService.delete(this.submissionStatusId).subscribe(
                (response) => {
                    console.log('Submission status deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting submission status', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
