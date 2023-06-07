import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QstarterComponent } from './qstarter.component';

describe('QstarterComponent', () => {
  let component: QstarterComponent;
  let fixture: ComponentFixture<QstarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QstarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QstarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
