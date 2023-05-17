import { Component } from '@angular/core';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
    selector: 'app-get-job-requirement',
    templateUrl: './get-job-requirement.component.html',
    styleUrls: ['./get-job-requirement.component.css']
})
export class GetJobRequirementComponent {

    jobRequirementId: any = null;
    jobRequirement: any = null;
    constructor(private jobRequirementService: JobRequirementService) { }

    ngOnInit(): void { }

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
}
