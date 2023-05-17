import { Component } from '@angular/core';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
    selector: 'app-update-recruiter',
    templateUrl: './update-recruiter.component.html',
    styleUrls: ['./update-recruiter.component.css']
})
export class UpdateRecruiterComponent {
    constructor(private recruiterService: RecruiterService) { }
    recruiterId: string = '';
    updateSuccess: boolean = false;
    recruiter: any = {
        id: null,
        firatName: "",
        lastName: "",
        employeeId: "",
    };

    getRecruiter() {
        this.recruiterService.get(this.recruiterId).subscribe(
            data => {
                this.recruiter = data;
            },
            error => {
                console.error('Error getting recruiter:', error);
            }
        );
    }


    updateRecruiter() {
        this.recruiterService.update(this.recruiterId, this.recruiter).subscribe(
            data => {
                console.log('Recruiter updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating recruiter:', error);
                this.updateSuccess = false;
            }
        );
    }


}
