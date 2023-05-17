import { Component } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent {
    constructor(private candidateService: CandidateService) { }
    candidateId: string = '';
    updateSuccess: boolean = false;
    candidate: any = {
        id: null,
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        resumeURL: '',
    };

    getCandidate() {
        this.candidateService.get(this.candidateId).subscribe(
            data => {
                this.candidate = data;
            },
            error => {
                console.error('Error getting candidate:', error);
            }
        );
    }

    updateCandidate() {
        this.candidateService.update(this.candidateId, this.candidate).subscribe(
            data => {
                console.log('Candidate updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating candidate:', error);
                this.updateSuccess = false;
            }
        );
    }
}
