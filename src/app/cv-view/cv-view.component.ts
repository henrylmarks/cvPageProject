import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Observable} from "rxjs";
import {IFilter, IProfile, ISectionData} from "../interfaces/cv-interfaces";

@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent implements OnInit {
  private _dataService: DataService;
  public sections$: Observable<Array<ISectionData>>;
  public profileData: IProfile;


  constructor(dataService: DataService) {
    this._dataService = dataService
  }

  public ngOnInit(): void {
    this.profileData = this._dataService.getProfile();
    this.sections$ = this._dataService.cvSections$;
  }

}
