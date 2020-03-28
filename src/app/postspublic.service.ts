import { Injectable } from '@angular/core';
import { PostsPublic } from './PostsPublic';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class PostpublicService {
  api = 'https://5e7ec6277a92ed001655fd99.mockapi.io/PostPublic';
  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<PostsPublic[]>{
    return this.http.get<PostsPublic[]>(this.api);
  }
  getPost(id): Observable<PostsPublic>{
    return this.http.get<PostsPublic>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removePost(id){
    
  }
  addPPost(product){
  
  }
  updatePost(postPublic){
     return this.http.put<PostsPublic>(`${this.api}/${postPublic.id}`, postPublic);
  }

}