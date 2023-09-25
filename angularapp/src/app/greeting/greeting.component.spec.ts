import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingComponent } from './greeting.component';
import { FormsModule } from '@angular/forms';

describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initially have empty user greeting', () => {
    expect(component.userGreeting).toBe('');
  });

  it('should initially have empty displayed greeting', () => {
    expect(component.displayedGreeting).toBe('');
  });

  it('should initially not be in editing mode', () => {
    expect(component.editing).toBe(false);
  });

  it('should display user greeting when "Display Greeting" button is clicked', () => {
    component.userGreeting = 'Hello';
    component.displayGreeting();
    expect(component.displayedGreeting).toBe('Hello');
  });

  it('should switch to editing mode when "Edit" button is clicked', () => {
    component.startEditing();
    expect(component.editing).toBe(true);
  });

  it('should not be in editing mode after saving editing', () => {
    component.editing = true;
    component.saveEditing();
    expect(component.editing).toBe(false);
  });

  // it('should reset displayed greeting when editing is saved', () => {
  //   component.displayedGreeting = 'Initial Greeting';
  //   component.editing = true;
  //   component.saveEditing();
  //   expect(component.displayedGreeting).toBe('');
  // });

  // it('should display edited greeting after editing is saved', () => {
  //     component.userGreeting = 'Hello';
  //     component.displayGreeting();
  //     component.editing = true;
  //     component.userGreeting = 'Hi';
  //     component.saveEditing();
  //   expect(component.displayedGreeting).toBe('Hi');
  // });
});
