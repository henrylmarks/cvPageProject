import {Injectable} from '@angular/core';
import {Observable, startWith, Subject} from "rxjs";
import {ICvData, IDetail, IProfile, ISectionData, ISummary} from "../interfaces/cv-interfaces";
import cvData from '../../cvData.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _sectionData: Array<ISectionData> = []
  private _cvSectionSubject: Subject<Array<ISectionData>> = new Subject<Array<ISectionData>>()
  private _cvData: ICvData;

  public cvSections$: Observable<Array<ISectionData>>

  constructor() {
    this._cvData = cvData;
    this._sectionData = this._cvData.sections
    this.cvSections$ = this._cvSectionSubject.asObservable().pipe(startWith(this._sectionData));

  }

  public getProfile(): IProfile {
    return this._cvData.profile
  }

  public filterData(filters: Array<string>): void {
    if (!filters.length) {
      this._cvSectionSubject.next(this._sectionData);
      return
    }
    const filteredResults: Array<ISectionData> = this._sectionData.map((section: ISectionData) => {
      return {
        ...section,
        data: section.data.map((summary: ISummary) => {
          const detailList: Array<IDetail> | undefined = summary.detailList?.filter((detail: IDetail) => detail.tags.some((tag: string) => filters.includes(tag)))
          return {
            ...summary,
            detailList
          }
        })
      }
    })

    this._cvSectionSubject.next(filteredResults)
  }
}
