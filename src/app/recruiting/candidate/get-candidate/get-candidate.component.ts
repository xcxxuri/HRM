import { Component } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/recruiting/candidate.service';

@Component({
    selector: 'app-get-candidate',
    templateUrl: './get-candidate.component.html',
    styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent {

    candidateId: any = null;
    candidate: any = null;
    constructor(private candidateService: CandidateService) { }

    ngOnInit(): void { }

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
}
