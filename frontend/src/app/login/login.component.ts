import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private http: HttpClient) { }
 
  res : any;

  user : any;
  model:any ={
    email: '',
    password: ''
 
  }
  serverErrorMessages: string = '';
 
  ngOnInit(): void {
  }
 
  noAccount(){
    this.router.navigate(['signup']);
  }

   login(){
     console.log("logging in....")
     


     this.userService.login(this.model).subscribe((response:any)=>{
       this.res = response['success'];
       if(this.res)
       {
        this.user = response['user'];
        this.userService.setUser(this.user);
        console.log(response)
        alert("Welcome:"+this.user.name+"\nSuccessfully logged in");
        console.log(JSON.stringify(response));
        this.userService.loginStatus = true;
        
        this.router.navigate(['profile']);
       }
       else
       {
         alert("Invalid password or email");
       }
       
     },
     err => {
      alert("Invalid password or email");
      this.serverErrorMessages = err.error.message;

    });
  
   }
 
  
    

}
