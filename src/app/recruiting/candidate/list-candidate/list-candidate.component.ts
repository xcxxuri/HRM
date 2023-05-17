import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent {
    
        candidates: any = [];
        selectedCandidate: any = {
            id: '',
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            resumeURL: '',
        };

        candidateForm = new FormGroup({
            id: new FormControl(''),
            firstName: new FormControl(''),
            middleName: new FormControl(''),
            lastName: new FormControl(''),
            email: new FormControl(''),
            resumeURL: new FormControl(''),
        });
        
    
        constructor(private candidateService: CandidateService) {
            this.candidateService.getAll().subscribe((data) => {
                this.candidates = data;
            });
        }
    
        onSelectCandidate(candidate: any) {
            this.selectedCandidate = candidate;
            this.candidateForm.setValue({
                id: candidate.id,
                firstName: candidate.firstName,
                middleName: candidate.middleName,
                lastName: candidate.lastName,
                email: candidate.email,
                resumeURL: candidate.resumeURL,
            });
        }
}
