import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTasksComponent } from './parent-tasks.component';

describe('ParentTasksComponent', () => {
  let component: ParentTasksComponent;
  let fixture: ComponentFixture<ParentTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
