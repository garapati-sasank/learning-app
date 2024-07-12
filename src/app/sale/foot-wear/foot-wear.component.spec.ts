import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootWearComponent } from './foot-wear.component';

describe('FootWearComponent', () => {
  let component: FootWearComponent;
  let fixture: ComponentFixture<FootWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootWearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
