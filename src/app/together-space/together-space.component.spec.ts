import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherSpaceComponent } from './together-space.component';

describe('TogetherSpaceComponent', () => {
  let component: TogetherSpaceComponent;
  let fixture: ComponentFixture<TogetherSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogetherSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogetherSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
