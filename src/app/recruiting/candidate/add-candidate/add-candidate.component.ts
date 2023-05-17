import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
    selector: 'app-add-candidate',
    templateUrl: './add-candidate.component.html',
    styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent {
    candidateForm = new FormGroup({
        // validation
        firstName: new FormControl('', [Validators.required]),
        middleName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        resumeURL: new FormControl('', [Validators.required]),
    });

    get firstName() { return this.candidateForm.get('firstName'); }
    get middleName() { return this.candidateForm.get('middleName'); }
    get lastName() { return this.candidateForm.get('lastName'); }
    get email() { return this.candidateForm.get('email'); }
    get resumeURL() { return this.candidateForm.get('resumeURL'); }

    candidate: any = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        resumeURL: ""
    };

    saveCandidate() {
        if (this.candidateForm.valid) {
            this.candidate = {
                firstName: this.candidateForm.value.firstName,
                middleName: this.candidateForm.value.middleName,
                lastName: this.candidateForm.value.lastName,
                email: this.candidateForm.value.email,
                resumeURL: this.candidateForm.value.resumeURL
            };
            this.candidateService.add(this.candidate).subscribe(
                (response) => {
                    console.log('Candidate added successfully:', response);
                    this.candidateForm.reset();
                    alert("Candidate added successfully");
                },
                (error) => {
                    console.error('Error adding candidate:', error);
                }
            );
        }
    }

    constructor(private candidateService: CandidateService) { }

}
