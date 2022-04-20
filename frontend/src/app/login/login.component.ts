import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userServce: UserService, private http: HttpClient) { }
 
  model ={
    email: '',
    password: ''
 
  }
  serverErrorMessages: string = '';
 
  ngOnInit(): void {
  }
 
  noAccount(){
    this.router.navigate(['signup']);
  }
 
  signIn(){
    this.userServce.login(this.model).subscribe(
      (res:any) => {
        if(res['token']){
          localStorage.setItem('token', res['token']);
          this.userServce.loginStatus = true;
          this.router.navigateByUrl('profile');
        }
        console.log(res);
        //this.userServce.setToken(res['token']);
        //localStorage.setItem('token', res.token);
      },
      err => {
        this.serverErrorMessages = err.error.message;
 
      }
    )};

}
