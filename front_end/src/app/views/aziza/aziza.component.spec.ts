import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzizaComponent } from './aziza.component';

describe('AzizaComponent', () => {
  let component: AzizaComponent;
  let fixture: ComponentFixture<AzizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzizaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AzizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
