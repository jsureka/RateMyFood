import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  res:any;
  post = new Post();

  user_id:any;

  apiBaseUrl = "http://localhost:5000/api/v1/";

  constructor(private http: HttpClient) { }

  post_blog(val:any)
  {
    return this.http.post(this.apiBaseUrl+'add-post',val);
  }

  getAllPost()
  {
    return this.http.get(this.apiBaseUrl+'get-post');
   
  }

  getUserPost()
  {
    return this.http.get(this.apiBaseUrl+'get-user-post' + this.user_id);
  }

}
