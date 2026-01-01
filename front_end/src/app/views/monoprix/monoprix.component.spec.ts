import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoprixComponent } from './monoprix.component';

describe('MonoprixComponent', () => {
  let component: MonoprixComponent;
  let fixture: ComponentFixture<MonoprixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonoprixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonoprixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
