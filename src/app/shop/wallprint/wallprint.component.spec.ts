import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallprintComponent } from './wallprint.component';

describe('WallprintComponent', () => {
  let component: WallprintComponent;
  let fixture: ComponentFixture<WallprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
