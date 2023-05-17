import { Component } from '@angular/core';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-get-interview-type',
  templateUrl: './get-interview-type.component.html',
  styleUrls: ['./get-interview-type.component.css']
})
export class GetInterviewTypeComponent {

    interviewTypeId: any = null;
    interviewType: any = null;
    constructor(private interviewTypeService : InterviewTypeService) { }

    ngOnInit(): void { }

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
}
