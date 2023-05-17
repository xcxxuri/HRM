import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubmissionStatusService } from 'src/app/shared/services/recruiting/submission-status.service';

@Component({
    selector: 'app-list-submission-status',
    templateUrl: './list-submission-status.component.html',
    styleUrls: ['./list-submission-status.component.css']
})
export class ListSubmissionStatusComponent {
    submissionStatuses: any = [];
    selectedSubmissionStatus: any = {
        id: '',
        description: '',
    };

    submissionStatusForm = new FormGroup({
        id: new FormControl(''),
        description: new FormControl(''),
    });


    constructor(private submissionStatusService: SubmissionStatusService) {
        this.submissionStatusService.getAll().subscribe((data) => {
            this.submissionStatuses = data;
        });
    }

    onSelectSubmissionStatus(submissionStatus: any) {
        this.selectedSubmissionStatus = submissionStatus;
        this.submissionStatusForm.setValue({
            id: submissionStatus.id,
            description: submissionStatus.description,
        });

    }
}
