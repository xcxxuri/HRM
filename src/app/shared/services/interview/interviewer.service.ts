import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {

  constructor(private httpclient: HttpClient) { }

    getAll() {
        return this.httpclient.get('http://localhost:50126/api/Interviewer/GetAllInterviewers');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50126/api/Interviewer/' + id + '/DeleteInterviewer');
    }

    add(interviewer: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50126/api/Interviewer/AddInterviewer', JSON.stringify(interviewer), httpOptions);
    }

    update(id: any, interviewer: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50126/api/Interviewer/${id}/UpdateInterviewer', JSON.stringify(interviewer), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50126/api/Interviewer/' + id + '/GetInterviewerById');
    }


}
