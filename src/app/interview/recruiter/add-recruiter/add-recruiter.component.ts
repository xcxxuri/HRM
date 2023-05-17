import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-add-recruiter',
  templateUrl: './add-recruiter.component.html',
  styleUrls: ['./add-recruiter.component.css']
})
export class AddRecruiterComponent {
    recruiterForm = new FormGroup({
        // validation
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        employeeId: new FormControl('', [Validators.required])
    });

    get firstName() { return this.recruiterForm.get('firstName'); }
    get lastName() { return this.recruiterForm.get('lastName'); }
    get employeeId() { return this.recruiterForm.get('employeeId'); }

    recruiter: any = {
        firstName: "",
        lastName: "",
        employeeId: ""
    };

    saveRecruiter() {
        if (this.recruiterForm.valid) {
            this.recruiter = {
                firstName: this.recruiterForm.value.firstName,
                lastName: this.recruiterForm.value.lastName,
                employeeId: this.recruiterForm.value.employeeId
            };
            
            this.recruiterService.add(this.recruiter).subscribe(
                (response) => {
                    console.log('Recruiter added successfully:', response);
                    this.recruiterForm.reset();
                    alert("Recruiter added successfully");
                },
                (error) => {
                    console.error('Error adding recruiter:', error);
                }
            );
        }
    }

    constructor(private recruiterService : RecruiterService) { }
    
}
