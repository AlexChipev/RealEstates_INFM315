import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateFooterComponent } from './estate-footer.component';

describe('EstateFooterComponent', () => {
  let component: EstateFooterComponent;
  let fixture: ComponentFixture<EstateFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
