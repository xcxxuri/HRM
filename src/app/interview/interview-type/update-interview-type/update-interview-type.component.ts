import { Component } from '@angular/core';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-update-interview-type',
  templateUrl: './update-interview-type.component.html',
  styleUrls: ['./update-interview-type.component.css']
})
export class UpdateInterviewTypeComponent {
    constructor(private interviewTypeService:InterviewTypeService) { }
    interviewTypeId: any = null;
    updateSuccess: boolean = false;
    interviewType: any = {
        id: null,
        description: "",
    };

    getInterviewType() {
        this.interviewTypeService.get(this.interviewTypeId).subscribe(
            data => {
                this.interviewType = data;
            },
            error => {
                console.error('Error getting interviewType:', error);
            }
        );
    }

    updateInterviewType() {
        this.interviewTypeService.update(this.interviewTypeId, this.interviewType).subscribe(
            data => {
                console.log('InterviewType updated successfully:', data);
                this.updateSuccess = true;
            },
            error => {
                console.error('Error updating interviewType:', error);
                this.updateSuccess = false;
            }
        );
    }
    
}
