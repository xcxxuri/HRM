import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
  selector: 'app-list-job-requirement',
  templateUrl: './list-job-requirement.component.html',
  styleUrls: ['./list-job-requirement.component.css']
})
export class ListJobRequirementComponent {
        jobRequirements: any = [];
        selectedJobRequirement: any = {
            id: '',
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
    
        jobRequirementForm = new FormGroup({
            id: new FormControl(''),
            numberOfPositions : new FormControl(''),
            title: new FormControl(''),
            description: new FormControl(''),
            hiringManagerId: new FormControl(''),
            hiringManagerName: new FormControl(''),
            startDate: new FormControl(''),
            isActive: new FormControl(''),
            closedReason: new FormControl(''),
            createdOn: new FormControl(''),
        });
        
    
        constructor(private jobRequirementService: JobRequirementService) {
            this.jobRequirementService.getAll().subscribe((data) => {
                this.jobRequirements = data;
            });
        }
    
        onSelectJobRequirement(jobRequirement: any) {
            this.selectedJobRequirement = jobRequirement;
            this.jobRequirementForm.setValue({
                id: jobRequirement.id,
                numberOfPositions : jobRequirement.numberOfPositions,
                title: jobRequirement.title,
                description: jobRequirement.description,
                hiringManagerId: jobRequirement.hiringManagerId,
                hiringManagerName: jobRequirement.hiringManagerName,
                startDate: jobRequirement.startDate,
                isActive: jobRequirement.isActive,
                closedReason: jobRequirement.closedReason,
                createdOn: jobRequirement.createdOn,
            });
        }
}
