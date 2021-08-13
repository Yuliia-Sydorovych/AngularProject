import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';
  public pName = "Parent's name";
  public message = "";

  public user = { fname:"", lname:"", email:"", phone:"" };
}
