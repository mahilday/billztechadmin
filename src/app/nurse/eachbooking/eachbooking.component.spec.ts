import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachbookingComponent } from './eachbooking.component';

describe('EachbookingComponent', () => {
  let component: EachbookingComponent;
  let fixture: ComponentFixture<EachbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
