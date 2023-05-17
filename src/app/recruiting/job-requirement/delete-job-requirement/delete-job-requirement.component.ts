import { Component } from '@angular/core';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
  selector: 'app-delete-job-requirement',
  templateUrl: './delete-job-requirement.component.html',
  styleUrls: ['./delete-job-requirement.component.css']
})
export class DeleteJobRequirementComponent {
    
        jobRequirementId: string = '';
        deleteSuccess: boolean = false;
        constructor(private jobRequirementService: JobRequirementService) { }
    
        deleteJobRequirement() {
            if (this.jobRequirementId) {
                this.jobRequirementService.delete(this.jobRequirementId).subscribe(
                    (response) => {
                        console.log('JobRequirement deleted successfully', response);
                        this.deleteSuccess = true;
                    },
                    (error) => {
                        console.error('Error deleting jobRequirement', error);
                        this.deleteSuccess = false;
                    }
                );
            }
        }

}
