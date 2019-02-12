import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLocBtnComponent } from './find-loc-btn.component';

describe('FindLocBtnComponent', () => {
  let component: FindLocBtnComponent;
  let fixture: ComponentFixture<FindLocBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLocBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLocBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
