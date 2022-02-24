import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private apiHost: string = './assets/blog_posts.json';

  constructor(
    private http: HttpClient
  ) {}

  public getBlogPosts(): Observable<any> {
    return this.http.get(this.apiHost);
  }
}
