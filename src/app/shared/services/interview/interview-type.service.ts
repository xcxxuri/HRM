import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewTypeService {

  constructor(private httpclient: HttpClient) { }

    getAll() {
        return this.httpclient.get('http://localhost:50126/api/InterviewType/GetAllInterviewTypes');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50126/api/InterviewType/' + id + '/DeleteInterviewType');
    }

    add(interviewtype: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50126/api/InterviewType/AddInterviewType', JSON.stringify(interviewtype), httpOptions);
    }

    update(id: any, interviewtype: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50126/api/InterviewType/${id}/UpdateInterviewType', JSON.stringify(interviewtype), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50126/api/InterviewType/' + id + '/GetInterviewTypeById');
    }
}
