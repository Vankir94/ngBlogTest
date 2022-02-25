import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeedback } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor(
    private http: HttpClient
  ) { }

  public getFeedbackList(): Observable<any>{ 
    return this.http.get('./assets/feedback_data.json');
  }

  public getNews(): Observable<any> {  
    return this.http.get('./assets/blog_posts.json');
  }

}
