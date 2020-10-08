import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs'
import { PostModel } from '../models/post/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  public getPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(this.url)
  }
}
