import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPostsService } from './blog-posts.service';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit, OnDestroy{

  public blogPosts!: Array<any>;
  public isReadMore = false;
  public sub1!: Subscription;

  constructor(
    private blogPostsService: BlogPostsService
  ) { }

  public ngOnInit(): void {
    this.sub1 = this.blogPostsService.getBlogPosts().subscribe(res => this.blogPosts = res);
  }

  public openMore(): void{
    this.isReadMore = !this.isReadMore;
  }

  public ngOnDestroy(): void {
      this.sub1.unsubscribe();
  }

}
