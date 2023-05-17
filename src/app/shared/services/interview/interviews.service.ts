import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  constructor(private httpclient: HttpClient) { }

    getAll() {
        return this.httpclient.get('http://localhost:50126/api/Interviews/GetAllInterviews');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50126/api/Interviews/' + id + '/DeleteInterview');
    }

    add(interview: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50126/api/Interviews/AddInterview', JSON.stringify(interview), httpOptions);
    }

    update(id: any, interview: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50126/api/Interviews/${id}/UpdateInterview', JSON.stringify(interview), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50126/api/Interviews/' + id + '/GetInterviewById');
    }
}
