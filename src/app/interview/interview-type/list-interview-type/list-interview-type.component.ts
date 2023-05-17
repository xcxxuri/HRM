import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-list-interview-type',
  templateUrl: './list-interview-type.component.html',
  styleUrls: ['./list-interview-type.component.css']
})
export class ListInterviewTypeComponent {

    interviewTypes: any = [];
    selectedInterviewType: any = {
        id: '',
        description: '',
    };
    interviewTypeForm = new FormGroup({
        id: new FormControl(''),
        description: new FormControl(''),
    });

    
    constructor(private interviewTypeService : InterviewTypeService) {
        this.interviewTypeService.getAll().subscribe((data) => {
            this.interviewTypes = data;
        });
     }
    
    onSelectInterviewType(interviewType: any) {
        this.selectedInterviewType = interviewType;
        this.interviewTypeForm.setValue({
            id: interviewType.id,
            description: interviewType.description,
        });
    }
}
