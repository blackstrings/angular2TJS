import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeJSComponent } from './three-js.component';

describe('ThreeJSComponent', () => {
  let component: ThreeJSComponent;
  let fixture: ComponentFixture<ThreeJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
