import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuastViewComponent } from './guast-view.component';

describe('GuastViewComponent', () => {
  let component: GuastViewComponent;
  let fixture: ComponentFixture<GuastViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuastViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
