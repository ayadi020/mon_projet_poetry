import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmonoprixComponent } from './formmonoprix.component';

describe('FormmonoprixComponent', () => {
  let component: FormmonoprixComponent;
  let fixture: ComponentFixture<FormmonoprixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormmonoprixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormmonoprixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
