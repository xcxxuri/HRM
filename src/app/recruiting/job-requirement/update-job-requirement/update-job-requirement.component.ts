import { Component } from '@angular/core';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
  selector: 'app-update-job-requirement',
  templateUrl: './update-job-requirement.component.html',
  styleUrls: ['./update-job-requirement.component.css']
})
export class UpdateJobRequirementComponent {
    constructor(private jobRequirementService: JobRequirementService) { }
    jobRequirementId: string = '';
    updateSuccess: boolean = false;
    jobRequirement: any = {
        id: null,
        numberOfPositions : '',
        title: '',
        description: '',
        hiringManagerId: '',
        hiringManagerName: '',
        startDate: '',
        isActive: '',
        closedReason: '',
        createdOn: '',
    };

    getJobRequirement() {
        this.jobRequirementService.get(this.jobRequirementId).subscribe(
            data => {
                this.jobRequirement = data;
            },
            error => {
                console.error('Error getting jobRequirement:', error);
            }
        );
    }

    updateJobRequirement() {
        this.jobRequirementService.update(this.jobRequirementId, this.jobRequirement).subscribe(
            data => {
                console.log('JobRequirement updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating jobRequirement:', error);
                this.updateSuccess = false;
            }
        );
    }
}
