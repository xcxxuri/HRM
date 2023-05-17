import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpclient: HttpClient) {}

    getAll() {
        return this.httpclient.get('http://localhost:50123/api/Candidate/GetAllCandidates');
    }

    delete(id: any) {
        return this.httpclient.delete('http://localhost:50123/api/Candidate/' + id + '/DeleteCandidate');
    }

    add(candidate: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.post('http://localhost:50123/api/Candidate/AddCandidate', JSON.stringify(candidate), httpOptions);
    }

    update(id: any, candidate: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.httpclient.put('http://localhost:50123/api/Candidate/${id}/UpdateCandidate', JSON.stringify(candidate), httpOptions);
    }

    get(id: any) {
        return this.httpclient.get('http://localhost:50123/api/Candidate/' + id + '/GetCandidateById');
    }
    
  
}
