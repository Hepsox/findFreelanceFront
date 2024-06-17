import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFreelanceComponent } from './all-freelance.component';

describe('AllFreelanceComponent', () => {
  let component: AllFreelanceComponent;
  let fixture: ComponentFixture<AllFreelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllFreelanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
