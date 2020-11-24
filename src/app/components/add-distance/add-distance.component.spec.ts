import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistanceComponent } from './add-distance.component';

describe('AddDistanceComponent', () => {
  let component: AddDistanceComponent;
  let fixture: ComponentFixture<AddDistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
