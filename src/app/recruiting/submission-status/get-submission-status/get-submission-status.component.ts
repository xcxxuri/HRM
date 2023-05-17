import { Component } from '@angular/core';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
  selector: 'app-get-submission-status',
  templateUrl: './get-submission-status.component.html',
  styleUrls: ['./get-submission-status.component.css']
})
export class GetSubmissionStatusComponent {
    
        submissionStatusId: any = null;
        submissionStatus: any = null;
        constructor(private submissionStatusService: SubmissionStatusService) { }
    
        ngOnInit(): void { }
    
        getSubmissionStatus() {
            this.submissionStatusService.get(this.submissionStatusId).subscribe(
                data => {
                    this.submissionStatus = data;
                },
                error => {
                    console.error('Error getting submissionStatus:', error);
                }
            );
        }
}
