import { Component } from '@angular/core';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
    selector: 'app-delete-interview-type',
    templateUrl: './delete-interview-type.component.html',
    styleUrls: ['./delete-interview-type.component.css']
})
export class DeleteInterviewTypeComponent {
    interviewTypeId: string = '';
    deleteSuccess: boolean = false;
    constructor(private interviewTypeService: InterviewTypeService) { }

    deleteInterviewType() {
        if (this.interviewTypeId) {
            this.interviewTypeService.delete(this.interviewTypeId).subscribe(
                (response) => {
                    console.log('InterviewType deleted successfully', response);
                    this.deleteSuccess = true;
                },
                (error) => {
                    console.error('Error deleting interviewType', error);
                    this.deleteSuccess = false;
                }
            );
        }
    }
}
