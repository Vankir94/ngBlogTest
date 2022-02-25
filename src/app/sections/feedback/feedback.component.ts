import { Component, OnDestroy, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs';
import { IFeedback } from 'src/app/interfaces';
import { ApiMockService } from 'src/app/shared/services/api-mock.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SectionOneComponent implements OnInit, OnDestroy {

  public feedbackList!: Array<IFeedback>;
  public isHide = false;

  private destroyEvent: EventEmitter<void> = new EventEmitter();

  constructor(
    private apiMockService: ApiMockService
  ) { }

  public ngOnInit(): void {
    this.apiMockService.getFeedbackList()
    .pipe(
      takeUntil(this.destroyEvent)
    )
    .subscribe(res => this.feedbackList = res);
  }

  public toggleHidden(): void{
    this.isHide = !this.isHide;
  }

  public ngOnDestroy(): void {
      this.destroyEvent.emit();
  }
}
