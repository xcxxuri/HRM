import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterviewsService } from 'src/app/shared/services/interview/interviews.service';

@Component({
  selector: 'app-add-interviews',
  templateUrl: './add-interviews.component.html',
  styleUrls: ['./add-interviews.component.css']
})
export class AddInterviewsComponent {
    interviewsForm = new FormGroup({
        // validation
        recruiterId: new FormControl('', [Validators.required ]),
        submissionId: new FormControl('', [Validators.required ]),
        interviewTypeId: new FormControl('', [Validators.required ]),
        interviewRound: new FormControl('', [Validators.required ]),
        schduledOn: new FormControl('', [Validators.required ]),
        interviewerId: new FormControl('', [Validators.required ]),
        feedbackId: new FormControl('', [Validators.required ])
    });

    get recruiterId() { return this.interviewsForm.get('recruiterId'); }
    get submissionId() { return this.interviewsForm.get('submissionId'); }
    get interviewTypeId() { return this.interviewsForm.get('interviewTypeId'); }
    get interviewRound() { return this.interviewsForm.get('interviewRound'); }
    get schduledOn() { return this.interviewsForm.get('schduledOn'); }
    get interviewerId() { return this.interviewsForm.get('interviewerId'); }
    get feedbackId() { return this.interviewsForm.get('feedbackId'); }

    interviews: any = {
        recruiterId: "",
        submissionId: "",
        interviewTypeId: "",
        interviewRound: "",
        schduledOn: "",
        interviewerId: "",
        feedbackId: ""
    };

    saveInterviews() {
        if (this.interviewsForm.valid) {
            this.interviews = {
                recruiterId: this.interviewsForm.value.recruiterId,
                submissionId: this.interviewsForm.value.submissionId,
                interviewTypeId: this.interviewsForm.value.interviewTypeId,
                interviewRound: this.interviewsForm.value.interviewRound,
                schduledOn: this.interviewsForm.value.schduledOn,
                interviewerId: this.interviewsForm.value.interviewerId,
                feedbackId: this.interviewsForm.value.feedbackId
            };
            
            this.interviewsService.add(this.interviews).subscribe(
                (response) => {
                    console.log('Interviews added successfully:', response);
                    this.interviewsForm.reset();
                    alert("Interviews added successfully");
                },
                (error) => {
                    console.error('Error adding interviews:', error);
                }
            );
        }
    }

    constructor(private interviewsService : InterviewsService) { }

}
