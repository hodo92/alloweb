import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTasksComponent } from './child-tasks.component';

describe('ChildTasksComponent', () => {
  let component: ChildTasksComponent;
  let fixture: ComponentFixture<ChildTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
