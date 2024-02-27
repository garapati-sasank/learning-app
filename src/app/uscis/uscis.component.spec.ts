import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UscisComponent } from './uscis.component';

describe('UscisComponent', () => {
  let component: UscisComponent;
  let fixture: ComponentFixture<UscisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UscisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UscisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
