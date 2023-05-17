import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionStatusService {

  constructor(private httpclient: HttpClient) {}
    
    getAll() {
        return this.httpclient.get('http://localhost:50123/api/SubmissionStatus/GetSubmissionStatus');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50123/api/SubmissionStatus/' + id + '/DeleteSubmissionStatus');
    }

    add(submissionStatus: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50123/api/SubmissionStatus/AddSubmissionStatus', JSON.stringify(submissionStatus), httpOptions);
    }

    update(id: any, submissionStatus: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50123/api/SubmissionStatus/${id}/UpdateSubmissionStatus', JSON.stringify(submissionStatus), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50123/api/SubmissionStatus/' + id + '/GetSubmissionStatusById');
    }
    

}
