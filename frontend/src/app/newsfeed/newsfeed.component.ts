import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {


  posts :any;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPost().subscribe((response:any)=>{
      this.posts = response['post'];
      console.log(this.posts);
    });
    
    console.log(this.posts);
  }

  


}
