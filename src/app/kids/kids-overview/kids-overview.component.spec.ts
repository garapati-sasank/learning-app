import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsOverviewComponent } from './kids-overview.component';

describe('KidsOverviewComponent', () => {
  let component: KidsOverviewComponent;
  let fixture: ComponentFixture<KidsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
