import { Component } from '@angular/core';
import { RecruiterService } from 'src/app/shared/services/interview/recruiter.service';

@Component({
  selector: 'app-delete-recruiter',
  templateUrl: './delete-recruiter.component.html',
  styleUrls: ['./delete-recruiter.component.css']
})
export class DeleteRecruiterComponent {
    recruiterId: string = '';
    deleteSuccess: boolean = false;
    constructor(private recruiterService : RecruiterService) { }

    deleteRecruiter() {
        if (this.recruiterId) {
            this.recruiterService.delete(this.recruiterId).subscribe(
                (response) => {
                    console.log('Recruiter deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting recruiter', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
