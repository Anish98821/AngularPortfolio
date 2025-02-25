import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


type SkillBadge = {
  'image-url': string;
  'skill-name': string;
};

type Skill = {
  'image-url': string;
  'skill-text': string;
};

type UserProfile = {
  'company-name': string;
  designation: string;
  'skill-badges': SkillBadge[];
  skills: Skill[];
};


@Component({
  selector: 'app-experience-detail-card',
  imports: [],
  templateUrl: './experience-detail-card.component.html',
  styleUrl: './experience-detail-card.component.scss',
  animations: [
    trigger('dataChangeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class ExperienceDetailCardComponent {

  @Input() data!: UserProfile;
  animate = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && !changes['data'].firstChange) {
      this.animate = false;
      setTimeout(() => this.animate = true, 0);
    }
  }
}
