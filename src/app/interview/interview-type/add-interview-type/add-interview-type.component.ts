import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterviewTypeService } from 'src/app/shared/services/interview/interview-type.service';

@Component({
  selector: 'app-add-interview-type',
  templateUrl: './add-interview-type.component.html',
  styleUrls: ['./add-interview-type.component.css']
})
export class AddInterviewTypeComponent {
    interviewTypeForm = new FormGroup({
        // validation
        description: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });

    get description() { return this.interviewTypeForm.get('description'); }

    interviewtype: any = {
        description: ""
    };

    saveInterviewType() {
        if (this.interviewTypeForm.valid) {
            this.interviewtype = {
                description: this.interviewTypeForm.value.description
            };
            
            this.interviewTypeService.add(this.interviewtype).subscribe(
                (response) => {
                    console.log('InterviewType added successfully:', response);
                    this.interviewTypeForm.reset();
                    alert("InterviewType added successfully");
                },
                (error) => {
                    console.error('Error adding interviewtype:', error);
                }
            );
        }
    }

    constructor(private interviewTypeService : InterviewTypeService) { }
}
