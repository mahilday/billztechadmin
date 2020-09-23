import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvaccComponent } from './allvacc.component';

describe('AllvaccComponent', () => {
  let component: AllvaccComponent;
  let fixture: ComponentFixture<AllvaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllvaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
