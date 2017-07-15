import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformersEditComponent } from './transformers-edit.component';

describe('TransformersEditComponent', () => {
  let component: TransformersEditComponent;
  let fixture: ComponentFixture<TransformersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
