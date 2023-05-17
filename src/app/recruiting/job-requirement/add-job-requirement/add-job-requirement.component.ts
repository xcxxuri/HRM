import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobRequirementService } from 'src/app/shared/services/recruiting/job-requirement.service';

@Component({
    selector: 'app-add-job-requirement',
    templateUrl: './add-job-requirement.component.html',
    styleUrls: ['./add-job-requirement.component.css']
})
export class AddJobRequirementComponent {
    jobRequirementForm = new FormGroup({
        // validation
        numberOfPositions: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        hiringManagerId: new FormControl('', [Validators.required]),
        hiringManagerName: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        isActive: new FormControl('', [Validators.required]),
        closedReason: new FormControl('', [Validators.required]),
        createdOn: new FormControl('', [Validators.required]),
    });

    get numberOfPositions() { return this.jobRequirementForm.get('numberOfPositions'); }
    get title() { return this.jobRequirementForm.get('title'); }
    get description() { return this.jobRequirementForm.get('description'); }
    get hiringManagerId() { return this.jobRequirementForm.get('hiringManagerId'); }
    get hiringManagerName() { return this.jobRequirementForm.get('hiringManagerName'); }
    get startDate() { return this.jobRequirementForm.get('startDate'); }
    get isActive() { return this.jobRequirementForm.get('isActive'); }
    get closedReason() { return this.jobRequirementForm.get('closedReason'); }
    get createdOn() { return this.jobRequirementForm.get('createdOn'); }

    jobRequirement: any = {
        numberOfPositions: "",
        title: "",
        description: "",
        hiringManagerId: "",
        hiringManagerName: "",
        startDate: "",
        isActive: true,
        closedReason: "",
        createdOn: "",
    };

    saveJobRequirement() {
        if (this.jobRequirementForm.valid) {
            this.jobRequirement = {
                numberOfPositions: this.jobRequirementForm.value.numberOfPositions,
                title: this.jobRequirementForm.value.title,
                description: this.jobRequirementForm.value.description,
                hiringManagerId: this.jobRequirementForm.value.hiringManagerId,
                hiringManagerName: this.jobRequirementForm.value.hiringManagerName,
                startDate: this.jobRequirementForm.value.startDate,
                isActive: this.jobRequirementForm.value.isActive,
                closedReason: this.jobRequirementForm.value.closedReason,
                createdOn: this.jobRequirementForm.value.createdOn,
            };
            this.jobRequirementService.add(this.jobRequirement).subscribe(
                (response) => {
                    console.log('JobRequirement added successfully:', response);
                    this.jobRequirementForm.reset();
                    alert("JobRequirement added successfully");
                },
                (error) => {
                    console.error('Error adding jobRequirement:', error);
                }
            );
        }
    }

    constructor(private jobRequirementService: JobRequirementService) {
    }

}
