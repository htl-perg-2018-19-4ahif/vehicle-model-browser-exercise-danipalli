import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsBrowserComponent } from './models-browser.component';

describe('ModelsBrowserComponent', () => {
  let component: ModelsBrowserComponent;
  let fixture: ComponentFixture<ModelsBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
