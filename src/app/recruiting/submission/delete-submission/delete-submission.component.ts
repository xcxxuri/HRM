import { Component } from '@angular/core';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-delete-submission',
  templateUrl: './delete-submission.component.html',
  styleUrls: ['./delete-submission.component.css']
})
export class DeleteSubmissionComponent {
    submissionId: string = '';
    deleteSuccess: boolean = false;
    
    constructor(private submissionService: SubmissionService) { }
    deleteSubmission() {
        if (this.submissionId) {
            this.submissionService.delete(this.submissionId).subscribe(
                (response) => {
                    console.log('Submission deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting submission', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
