import { Component, OnDestroy, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { delay, takeUntil } from 'rxjs';
import { IFeedback } from 'src/app/interfaces';
import { ApiMockService } from 'src/app/shared/services/api-mock.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SectionOneComponent implements OnInit, OnDestroy {

  public feedbackList: Array<IFeedback> | [] = [];
  public isHide = false;
  public isDisabled = true;

  private destroyEvent: EventEmitter<void> = new EventEmitter();

  constructor(
    private apiMockService: ApiMockService
  ) { }

  public ngOnInit(): void {
    
    this.apiMockService.getFeedbackList()
    .pipe(
      delay(3000),
      takeUntil(this.destroyEvent)
    )
    .subscribe(res => {
      if (Array.isArray(res) && res !== []) {
        this.isDisabled = false;
      }
      this.feedbackList = res
    });
  }

  public toggleHidden(): void{
    this.isHide = !this.isHide;
  }

  public ngOnDestroy(): void {
      this.destroyEvent.emit();
  }
}
