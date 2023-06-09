import {Component, Input} from '@angular/core';
import {ISummary} from "../interfaces/cv-interfaces";


@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.css']
})
export class CarouselSlideComponent {
  @Input()
  public slideData: ISummary
}
