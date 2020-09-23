import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachvaccComponent } from './eachvacc.component';

describe('EachvaccComponent', () => {
  let component: EachvaccComponent;
  let fixture: ComponentFixture<EachvaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachvaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachvaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
