import { Component } from '@angular/core';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
    selector: 'app-get-submission',
    templateUrl: './get-submission.component.html',
    styleUrls: ['./get-submission.component.css']
})
export class GetSubmissionComponent {

    submissionId: any = null;
    submission: any = null;
    constructor(private submissionService: SubmissionService) { }

    ngOnInit(): void { }

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
}
