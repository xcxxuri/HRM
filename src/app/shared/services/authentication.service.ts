import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private httpclient: HttpClient) {
    }

    login(username: any, password: any) {
        let userCredential={
            username:username,
            password:password
        };

        return this.httpclient.post('http://localhost:50125/api/Account/Login', userCredential);
    }

    getToken() {
        if(localStorage.hasOwnProperty('authenticationToken'))
            return localStorage.getItem('authenticationToken');
        else
            return "";
    }

}
