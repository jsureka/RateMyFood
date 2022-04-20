import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user !: any;
  post = new Post();

  

  constructor(private userService:UserService,private postService:PostService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.post.user_id = this.user._id;
  }
  
  post_blog()
  {
    
     
    
    this.postService.post_blog(this.post).subscribe(response=>{
      alert(response);
      
    },
    err => {
      //alert("Invalid password or email");
      console.log(this.post.user_id+" "+this.post.foodName);
      alert(err.error.message);

    });
  
  }



  

}
