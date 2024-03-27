import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOutputFormComponent } from './university-output-form.component';

describe('UniversityOutputFormComponent', () => {
  let component: UniversityOutputFormComponent;
  let fixture: ComponentFixture<UniversityOutputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversityOutputFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversityOutputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
