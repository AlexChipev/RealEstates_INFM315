import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedMenuItemComponent } from './saved-menu-item.component';

describe('SavedMenuItemComponent', () => {
  let component: SavedMenuItemComponent;
  let fixture: ComponentFixture<SavedMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
