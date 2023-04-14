import {Component} from '@angular/core';
import {DataService} from "../services/data.service";
import {IFilter} from "../interfaces/cv-interfaces";
import {transition, trigger, useAnimation} from "@angular/animations";
import {scaleIn} from "../animations";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger("buttonAnimation", [
      transition("void => *", [useAnimation(scaleIn, {params: {time: '500ms'}})]),
    ])
  ]
})
export class FilterComponent {
  public showFilterOptions: boolean = false;
  public availableFilters: Array<IFilter> = [
    {value: 'technical', active: false},
    {value: 'organisation', active: false},
    {value: 'team work', active: false},
    {value: 'problem solving', active: false},
    {value: 'time management', active: false},
  ]
  private _activeFilters: Array<string> = []
  private _dataService: DataService;

  constructor(dataService: DataService) {
    this._dataService = dataService
  }

  public toggleFilterActive(filter: IFilter): void {
    filter.active = !filter.active;
    if (filter.active) {
      this._activeFilters.push(filter.value)
    } else {
      this._activeFilters = this._activeFilters.filter((value: string) => value !== filter.value);
    }
  }

  public filter(): void {
    this._dataService.filterData(this._activeFilters)
    this.showFilterOptions = false;
  }

  public clearFilters(): void {
    this._activeFilters = [];
    this.availableFilters.forEach((filter: IFilter) => filter.active = false);
    this.filter()
  }
}

