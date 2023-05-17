import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubmissionService } from 'src/app/shared/services/recruiting/submission.service';

@Component({
  selector: 'app-add-submission',
  templateUrl: './add-submission.component.html',
  styleUrls: ['./add-submission.component.css']
})
export class AddSubmissionComponent {

    submissionForm = new FormGroup({
        // validation
        jobRequirementId: new FormControl('', [Validators.required]),
        candidateId: new FormControl('', [Validators.required]),
        submittedOn: new FormControl('', [Validators.required]),
        submissionStatusCode: new FormControl('', [Validators.required]),
        createdOn: new FormControl('', [Validators.required]),
        rejectedOn: new FormControl('', [Validators.required]),
    });

    get jobRequirementId() { return this.submissionForm.get('jobRequirementId'); }
    get candidateId() { return this.submissionForm.get('candidateId'); }
    get submittedOn() { return this.submissionForm.get('submittedOn'); }
    get submissionStatusCode() { return this.submissionForm.get('submissionStatusCode'); }
    get createdOn() { return this.submissionForm.get('createdOn'); }
    get rejectedOn() { return this.submissionForm.get('rejectedOn'); }

    submission: any = {
        jobRequirementId: "",
        candidateId: "",
        submittedOn: "",
        submissionStatusCode: "",
        createdOn: "",
        rejectedOn: ""
    };

    saveSubmission() {
        if (this.submissionForm.valid) {
            this.submission = {
                jobRequirementId: this.submissionForm.value.jobRequirementId,
                candidateId: this.submissionForm.value.candidateId,
                submittedOn: this.submissionForm.value.submittedOn,
                submissionStatusCode: this.submissionForm.value.submissionStatusCode,
                createdOn: this.submissionForm.value.createdOn,
                rejectedOn: this.submissionForm.value.rejectedOn
            };
            this.submissionService.add(this.submission).subscribe(
                (response) => {
                    console.log('Submission added successfully:', response);
                    this.submissionForm.reset();
                    alert("Submission added successfully");
                },
                (error) => {
                    console.error('Error adding submission:', error);
                }
            );

           
        }
    }

    constructor(private submissionService: SubmissionService) { }

}
