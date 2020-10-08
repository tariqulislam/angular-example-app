import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string = "Angular Application Example"
  posts = new Array<PostModel>()
  displayedColumns: string[] = ['body', 'id', 'title', 'userId'];
  JSON:any=JSON;
  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(res => {
      this.posts = res.map(item => {
        return new PostModel(
          item.body,
          item.id,
          item.title,
          item.userId
        )
      })
    })
  }
}
