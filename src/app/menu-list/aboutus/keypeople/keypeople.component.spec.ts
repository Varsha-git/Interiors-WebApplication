import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypeopleComponent } from './keypeople.component';

describe('KeypeopleComponent', () => {
  let component: KeypeopleComponent;
  let fixture: ComponentFixture<KeypeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
