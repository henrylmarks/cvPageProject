import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvViewComponent } from './cv-view/cv-view.component';
import { SectionViewComponent } from './section-view/section-view.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { FilterComponent } from './filter/filter.component';
import { CarouselComponent } from './carousel/carousel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    CvViewComponent,
    SectionViewComponent,
    SummaryViewComponent,
    ProfileViewComponent,
    FilterComponent,
    CarouselComponent,
    CarouselSlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
