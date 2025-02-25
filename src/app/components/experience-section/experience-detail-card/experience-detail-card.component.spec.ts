import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailCardComponent } from './experience-detail-card.component';

describe('ExperienceDetailCardComponent', () => {
  let component: ExperienceDetailCardComponent;
  let fixture: ComponentFixture<ExperienceDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
