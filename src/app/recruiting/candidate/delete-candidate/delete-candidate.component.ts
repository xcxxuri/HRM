import { Component } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
    selector: 'app-delete-candidate',
    templateUrl: './delete-candidate.component.html',
    styleUrls: ['./delete-candidate.component.css']
})
export class DeleteCandidateComponent {

    candidateId: string = '';
    deleteSuccess: boolean = false;
    constructor(private candidateService: CandidateService) { }

    deleteCandidate() {
        if (this.candidateId) {
            this.candidateService.delete(this.candidateId).subscribe(
                (response) => {
                    console.log('Candidate deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting candidate', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
