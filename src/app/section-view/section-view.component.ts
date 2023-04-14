import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ISectionData} from "../interfaces/cv-interfaces";

@Component({
  selector: 'app-section-view',
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.css']
})
export class SectionViewComponent {
@Input()
  public sectionData: ISectionData
}

