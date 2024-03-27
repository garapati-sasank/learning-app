import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOutputTableComponent } from './university-output-table.component';

describe('UniversityOutputTableComponent', () => {
  let component: UniversityOutputTableComponent;
  let fixture: ComponentFixture<UniversityOutputTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UniversityOutputTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniversityOutputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
