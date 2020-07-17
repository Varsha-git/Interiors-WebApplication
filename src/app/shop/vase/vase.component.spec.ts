import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaseComponent } from './vase.component';

describe('VaseComponent', () => {
  let component: VaseComponent;
  let fixture: ComponentFixture<VaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
