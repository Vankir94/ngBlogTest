import { Component, EventEmitter, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs';
import { INew } from 'src/app/interfaces';
import { ApiMockService } from 'src/app/shared/services/api-mock.service';

@Component({
  selector: 'app-section-two',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class SectionTwoComponent implements OnInit, OnDestroy{

  public news!: Array<INew>;
  public isReadMore = false;
  public isHiddenBtnReadMore = true;
  private destroyEvent: EventEmitter<void> = new EventEmitter();

  constructor(
    private apiMockService: ApiMockService
  ) { }

  public ngOnInit(): void {
  this.apiMockService.getNews()
    .pipe(
      takeUntil(this.destroyEvent)
    )
    .subscribe(res => this.news = res);
  }

  public showAll(): void{
    this.isReadMore = true;
    this.isHiddenBtnReadMore = false;
  }

  public ngOnDestroy(): void {
      this.destroyEvent.emit();
  }

}
