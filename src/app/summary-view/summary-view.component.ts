import {Component, Input} from '@angular/core';
import {ISummary} from "../interfaces/cv-interfaces";

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})
export class SummaryViewComponent {
@Input()
  public summaryData: ISummary
}
