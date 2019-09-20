import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Central4Component } from './central4.component';

describe('Central4Component', () => {
  let component: Central4Component;
  let fixture: ComponentFixture<Central4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Central4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Central4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
