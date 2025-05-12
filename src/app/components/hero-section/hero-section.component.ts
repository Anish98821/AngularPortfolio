import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit {
@ViewChild('animatedSvg', { static: true }) svgElement!: ElementRef<SVGElement>;
@ViewChild('heroContent', { static: true }) heroContent!: ElementRef<HTMLDivElement>;

ngAfterViewInit(): void {
  const svgEl = this.svgElement.nativeElement;
  const contentEl = this.heroContent.nativeElement;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      svgEl.classList.add('active');

      setTimeout(() => {
        contentEl.classList.add('visible');
      }, 2000); // match animation duration

      observer.unobserve(svgEl);
    }
  }, { threshold: 0.3 });

  observer.observe(svgEl);
}

}
