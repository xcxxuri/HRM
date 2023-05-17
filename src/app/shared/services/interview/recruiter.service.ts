import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private httpclient: HttpClient) { }
  
    getAll() {
        return this.httpclient.get('http://localhost:50126/api/Recruiter/GetAllRecruiters');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50126/api/Recruiter/' + id + '/DeleteRecruiter');
    }

    add(recruiter: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50126/api/Recruiter/AddRecruiter', JSON.stringify(recruiter), httpOptions);
    }

    update(id: any, recruiter: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50126/api/Recruiter/${id}/UpdateRecruiter', JSON.stringify(recruiter), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50126/api/Recruiter/' + id + '/GetRecruiterById');
    }
        
    
}
