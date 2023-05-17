import { Component } from '@angular/core';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-update-submission',
  templateUrl: './update-submission.component.html',
  styleUrls: ['./update-submission.component.css']
})
export class UpdateSubmissionComponent {
    constructor(private submissionService: SubmissionService) { }
    submissionId: string = '';
    updateSuccess: boolean = false;
    submission: any = {
        id: null,
        jobRequirementId: '',
        candidateId: '',
        submittedOn: '',
        submissionStatusCode: '',
        createdOn: '',
        rejectedOn: '',
    };

    getSubmission() {
        this.submissionService.get(this.submissionId).subscribe(
            data => {
                this.submission = data;
            },
            error => {
                console.error('Error getting submission:', error);
            }
        );
    }

    updateSubmission() {
        this.submissionService.update(this.submissionId, this.submission).subscribe(
            data => {
                console.log('Submission updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating submission:', error);
                this.updateSuccess = false;
            }
        );
    }

}
