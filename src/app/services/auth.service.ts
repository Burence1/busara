import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl:string=`${environment.baseurl}/api/v1/users/registration/`
  loginUlr: string = `${environment.baseurl}/api/v1/oauth/token/`

  constructor(private http:HttpClient) { }

  register(reg: Register) {
    return this.http.post(this.registerUrl, reg)
  }

  login(data: { username: string; password: string }) {
    return this.http.post(this.loginUlr, data, { withCredentials: false })
  }
}
