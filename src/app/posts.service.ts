import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}
  getAllPosts() {
    return this.http.get('/posts/').forEach(( posts: any) => {
      return posts;
      
    });
  }
}
