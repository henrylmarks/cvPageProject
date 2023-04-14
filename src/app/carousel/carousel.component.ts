import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISummary} from "../interfaces/cv-interfaces";
import { transition, trigger, useAnimation} from "@angular/animations";
import {scaleIn, scaleOut} from "../animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger("slideAnimation", [
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class CarouselComponent implements OnInit, OnChanges {
@Input()
  carouselData: Array<ISummary>

  public currentSummary: ISummary;

public availableSummaries: Array<ISummary>

public ngOnInit(): void {
  this.availableSummaries = this._excludeSummariesWithoutDetails(this.carouselData);
  this.currentSummary = this.carouselData[0];
}

public ngOnChanges(changes: SimpleChanges): void {
  this.availableSummaries = this._excludeSummariesWithoutDetails(changes['carouselData'].currentValue)

}

private _excludeSummariesWithoutDetails(data: Array<ISummary>): Array<ISummary> {
  return data.filter((summary: ISummary) => summary.detailList?.length)
}

public nextSlide(): void {
  const currentIndex: number = this.availableSummaries.indexOf(this.currentSummary);
  const targetIndex: number = currentIndex === this.availableSummaries.length-1 ? 0 : currentIndex +1;
  return this._updateCurrentSlide(targetIndex);

}

  public previousSlide(): void {
    const currentIndex: number = this.availableSummaries.indexOf(this.currentSummary);
    const targetIndex: number = currentIndex <=0 ? this.availableSummaries.length-1 : currentIndex -1
   return this._updateCurrentSlide(targetIndex)
  }

  private _updateCurrentSlide(targetIndex: number): void {
    this.currentSummary = this.availableSummaries[targetIndex]
  }
}
