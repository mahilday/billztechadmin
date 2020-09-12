import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseLayoutComponent } from './nurse-layout.component';

describe('NurseLayoutComponent', () => {
  let component: NurseLayoutComponent;
  let fixture: ComponentFixture<NurseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
