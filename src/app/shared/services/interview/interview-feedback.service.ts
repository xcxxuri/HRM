import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InterviewFeedbackService {

    constructor(private httpclient: HttpClient) { }

    getAll() {
        return this.httpclient.get('http://localhost:50126/api/InterviewFeedback/GetAllInterviewFeedbacks');
        
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50126/api/InterviewFeedback/' + id + '/DeleteInterviewFeedback');
    }

    add(interviewfeedback: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50126/api/InterviewFeedback/AddInterviewFeedback', JSON.stringify(interviewfeedback), httpOptions);
    }

    update(id: any, interviewfeedback: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50126/api/InterviewFeedback/${id}/UpdateInterviewFeedback', JSON.stringify(interviewfeedback), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50126/api/InterviewFeedback/' + id + '/GetInterviewFeedbackById');
    }

}
