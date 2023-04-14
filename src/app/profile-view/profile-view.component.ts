import {Component, Input} from '@angular/core';
import {IProfile} from "../interfaces/cv-interfaces";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  @Input()
  public profileData: IProfile
}
