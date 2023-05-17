import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobRequirementService {

  constructor(private httpclient: HttpClient) {}

    getAll() {
        return this.httpclient.get('http://localhost:50123/api/JobRequirement/GetAllJobRequirement');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50123/api/JobRequirement/' + id + '/DeleteJobRequirement');
    }

    add(jobRequirement: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50123/api/JobRequirement/AddJobRequirement', JSON.stringify(jobRequirement), httpOptions);
    }

    update(id: any, jobRequirement: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50123/api/JobRequirement/${id}/UpdateJobRequirement', JSON.stringify(jobRequirement), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50123/api/JobRequirement/' + id + '/GetJobRequirementById');
    }

  
}
