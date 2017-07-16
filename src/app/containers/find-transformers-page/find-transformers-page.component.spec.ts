import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTransformersPageComponent } from './find-transformers-page.component';

describe('FindTransformersPageComponent', () => {
  let component: FindTransformersPageComponent;
  let fixture: ComponentFixture<FindTransformersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTransformersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTransformersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
