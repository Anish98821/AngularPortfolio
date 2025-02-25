import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ExperienceSectionComponent } from "./components/experience-section/experience-section.component";
import { ProjectSectionComponent } from "./components/project-section/project-section.component";
import { ContactSectionComponent } from "./components/contact-section/contact-section.component";
import { CertificateSectionComponent } from "./components/certificate-section/certificate-section.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroSectionComponent, ExperienceSectionComponent, ProjectSectionComponent, ContactSectionComponent, CertificateSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularCSR';
}
