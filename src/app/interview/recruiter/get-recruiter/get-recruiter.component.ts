import { Component } from '@angular/core';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-get-recruiter',
  templateUrl: './get-recruiter.component.html',
  styleUrls: ['./get-recruiter.component.css']
})
export class GetRecruiterComponent {
    recruiterId: any = null;
    recruiter: any = null;
    constructor(private recruiterService : RecruiterService) { }

    ngOnInit(): void { }

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
}
