import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePComponent } from './update-p.component';

describe('UpdatePComponent', () => {
  let component: UpdatePComponent;
  let fixture: ComponentFixture<UpdatePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
