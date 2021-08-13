import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildrenElementsComponent } from './parent-children-elements.component';

describe('ParentChildrenElementsComponent', () => {
  let component: ParentChildrenElementsComponent;
  let fixture: ComponentFixture<ParentChildrenElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildrenElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildrenElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
