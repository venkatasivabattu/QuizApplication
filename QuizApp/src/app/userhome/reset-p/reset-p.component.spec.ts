import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPComponent } from './reset-p.component';

describe('ResetPComponent', () => {
  let component: ResetPComponent;
  let fixture: ComponentFixture<ResetPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
