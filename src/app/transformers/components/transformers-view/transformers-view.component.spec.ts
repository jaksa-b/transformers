import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformersViewComponent } from './transformers-view.component';

describe('TransformersViewComponent', () => {
  let component: TransformersViewComponent;
  let fixture: ComponentFixture<TransformersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
