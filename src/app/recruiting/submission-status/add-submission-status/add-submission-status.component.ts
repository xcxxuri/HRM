import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-add-submission-status',
  templateUrl: './add-submission-status.component.html',
  styleUrls: ['./add-submission-status.component.css']
})
export class AddSubmissionStatusComponent {
    submissionStatusForm = new FormGroup({
        // validation
        description : new FormControl('', [Validators.required]),
    });
    
    get description() { return this.submissionStatusForm.get('description'); }

    submissionStatus: any = {
        description: ""
    };

    saveSubmissionStatus() {
        if (this.submissionStatusForm.valid) {
            this.submissionStatus = {
                description: this.submissionStatusForm.value.description
            };
            this.submissionStatusService.add(this.submissionStatus).subscribe(
                (response) => {
                    console.log('SubmissionStatus added successfully:', response);
                    this.submissionStatusForm.reset();
                    alert("SubmissionStatus added successfully");
                },
                (error) => {
                    console.error('Error adding submissionStatus:', error);
                }
            );
        }
    }

    constructor(private submissionStatusService: SubmissionStatusService) { }


}
