import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
    selector: 'app-list-submission',
    templateUrl: './list-submission.component.html',
    styleUrls: ['./list-submission.component.css']
})
export class ListSubmissionComponent {
    submissions: any = [];
    selectedSubmission: any = {
        id: '',
        jobRequirementId: '',
        candidateId: '',
        submittedOn: '',
        submissionStatusCode: '',
        createdOn: '',
        rejectedOn: '',
    };

    submissionForm = new FormGroup({
        id: new FormControl(''),
        jobRequirementId: new FormControl(''),
        candidateId: new FormControl(''),
        submittedOn: new FormControl(''),
        submissionStatusCode: new FormControl(''),
        createdOn: new FormControl(''),
        rejectedOn: new FormControl(''),
    });


    constructor(private submissionService: SubmissionService) {
        this.submissionService.getAll().subscribe((data) => {
            this.submissions = data;
        });
    }

    onSelectSubmission(submission: any) {
        this.selectedSubmission = submission;
        this.submissionForm.setValue({
            id: submission.id,
            jobRequirementId: submission.jobRequirementId,
            candidateId: submission.candidateId,
            submittedOn: submission.submittedOn,
            submissionStatusCode: submission.submissionStatusCode,
            createdOn: submission.createdOn,
            rejectedOn: submission.rejectedOn,
        });
    }
}
