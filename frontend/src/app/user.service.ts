import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = new User();
  loginStatus: boolean = false;
  constructor(private http: HttpClient) { }
  apiBaseUrl = "http://localhost:5000/api/v1/";
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
 
  addUser(val: any) {
    return this.http.post(this.apiBaseUrl + 'register', val);
  }
  // login(val:any){
  //   return this.http.post(this.apiBaseUrl +  'login', val, {
  //       withCredentials: true
  //   });
  // }
 
   login(val: any){
     return this.http.post(this.apiBaseUrl + 'login', val);
  }
 

  
  getUserProfile(){
    return this.http.get(this.apiBaseUrl + '/userProfile');
  }
 
  //helper methods
 
  setToken(token: string){
    localStorage.setItem('token', token);
  }
 
  getToken(){
    return localStorage.getItem('token');
  }
 
  deleteToken(){
    localStorage.removeItem('token');
  }
 
  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
 
    isLoggedIn(){
      var userPayload = this.getUserPayload();
      if(userPayload){
        return userPayload.exp > Date.now()/1000;
      }
      else
        return false;
    }
    setUser(user:User)
    {
      this.selectedUser = user;
    }
    getUser():User{
      return this.selectedUser;
    }
}
