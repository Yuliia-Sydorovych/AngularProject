import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent-children-elements',
  templateUrl: './parent-children-elements.component.html',
  styleUrls: ['./parent-children-elements.component.scss']
})
export class ParentChildrenElementsComponent {
  
  @Input ('parentData') public Name;
  @Input () public parentData;
  @Output() public childEvent = new EventEmitter();

  public fname = "";
  public lname = "";
  public email = "";
  public phone = "";
  
  public info;

  fireEvent(event)
  {
    this.info = [this.fname, this.lname, this.email, this.phone];
    event.preventDefault();
    this.childEvent.emit(this.info);
  }
  
  constructor() { }

}
