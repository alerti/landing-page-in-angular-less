import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Central5Component } from './central5.component';

describe('Central5Component', () => {
  let component: Central5Component;
  let fixture: ComponentFixture<Central5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Central5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Central5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
