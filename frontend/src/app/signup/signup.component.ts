import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user = new User();
  confirm_password:string = "";
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
  }

  addUser(){
    console.log("adding User")
    // var data = {
    //   name:this.name,
    //   phone_number:this.phone_number,
    //   email:this.email,
    //   address:this.address,
    //   username:this.username,
    //   password:this.password
    // }
    if(this.user.password == this.confirm_password)
    {
      this.userService.addUser(this.user).subscribe(response=>{
        alert(response)
        this.route.navigate(['signin'])
      });
    }
    else
    {
      alert('please enter same password');
      console.log('please enter same password');
    }
    
  }

}
