import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit, OnDestroy {

  public feedbacks!: Array<any>;
  public isHide = false;
  public sub1!: Subscription;

  constructor(
    private feedbackService: FeedbackService
  ) { }

  public ngOnInit(): void {
    this.sub1 = this.feedbackService.getFeedbacks().subscribe(res => this.feedbacks = res);
  }

  public removeHide(): void{
    this.isHide = !this.isHide;
  }

  public ngOnDestroy(): void {
      this.sub1.unsubscribe();
  }
}
