import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsEditComponent } from './kids-edit.component';

describe('KidsEditComponent', () => {
  let component: KidsEditComponent;
  let fixture: ComponentFixture<KidsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KidsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
