import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRoundupComponent } from './the-roundup.component';

describe('TheRoundupComponent', () => {
  let component: TheRoundupComponent;
  let fixture: ComponentFixture<TheRoundupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheRoundupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheRoundupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
