import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  user_posts :any;
  user_id:any;
  constructor(private postService:PostService,private userService:UserService) { }

  ngOnInit(): void {
    this.user_id = this.userService.getUser()._id;
    this.user_posts = this.postService.getUserPost();

  }

}
