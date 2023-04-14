export interface ISectionData {
  sectionName: string;
  isCarousel: boolean;
  data: Array<ISummary>
}

export interface ISummary {
  title: string;
  organisation: string;
  startDate: string;
  endDate: string;
  detailList?: Array<IDetail>
}

export interface IDetail {
  description: string;
  tags: Array<string>;
}


export interface IProfile {
  name: string;
  jobTitle: string;
  skillIcons: Array<{ image: string, label: string }>
  description: string;
}

export interface IFilter {
  value: string;
  active: boolean;
}

export interface ICvData {
  profile: IProfile;
  sections: Array<ISectionData>
}
