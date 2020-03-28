import { Component, OnInit } from '@angular/core';
import { PostpublicService } from '../postspublic.service';

import { PostsPublic } from '../PostsPublic';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  selected: PostsPublic;
  posts: PostsPublic[];
  constructor(
    private postpublicService: PostpublicService
  ) {
    console.log('constructor')
   }

  ngOnInit():void {
    this.getPosts();
  }
  
  
  getPosts(){
   this.postpublicService.getPosts().subscribe(data => {
     console.log(data);
     this.posts = data;
    });
  }

}