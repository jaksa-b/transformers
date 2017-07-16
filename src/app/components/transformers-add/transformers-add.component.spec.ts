import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformersAddComponent } from './transformers-add.component';

describe('TransformersAddComponent', () => {
  let component: TransformersAddComponent;
  let fixture: ComponentFixture<TransformersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
