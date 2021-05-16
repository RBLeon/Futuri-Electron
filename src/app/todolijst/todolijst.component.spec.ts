import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolijstComponent } from './todolijst.component';

describe('TodolijstComponent', () => {
  let component: TodolijstComponent;
  let fixture: ComponentFixture<TodolijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolijstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
