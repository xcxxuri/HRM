import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private httpclient: HttpClient) {}

    getAll() {
        return this.httpclient.get('http://localhost:50123/api/Submission/GetSubmission');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50123/api/Submission/' + id + '/DeleteSubmission');
    }

    add(submission: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50123/api/Submission/AddSubmission', JSON.stringify(submission), httpOptions);
    }

    update(id: any, submission: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50123/api/Submission/${id}/UpdateSubmission', JSON.stringify(submission), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50123/api/Submission/' + id + '/GetSubmissionById');
    }
  
}
