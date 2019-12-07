import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTodoComponent } from './modifier-todo.component';

describe('ModifierTodoComponent', () => {
  let component: ModifierTodoComponent;
  let fixture: ComponentFixture<ModifierTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
