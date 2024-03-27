import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOutputComponent } from './university-output.component';

describe('UniversityOutputComponent', () => {
  let component: UniversityOutputComponent;
  let fixture: ComponentFixture<UniversityOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversityOutputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversityOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
