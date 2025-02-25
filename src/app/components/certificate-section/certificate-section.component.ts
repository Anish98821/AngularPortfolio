import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate-section',
  imports: [],
  templateUrl: './certificate-section.component.html',
  styleUrl: './certificate-section.component.scss'
})
export class CertificateSectionComponent {

  navigate: Function = (url: string): void => {
    window.open(url, "_blank");
  }

  certificateData= [
    {
      "certification_name": "PostgressSQL Essential Training",
      "issuer":"LinkedIn",
      "issued_on":"Jan 2025",
      "issuer_logo":"/assets/certificate_issuer_logos/LinkedIn.svg",
      "credential_link":"https://www.linkedin.com/learning/certificates/dfc695451ffe52ef7945dd531865807ac8c9ddbfb857bbe046b54fb41ca64b99?u=141502314"
    },
    {
      "certification_name": "Engineer Learning Path",
      "issuer":"Postman",
      "issued_on":"Dec 2024",
      "issuer_logo":"/assets/certificate_issuer_logos/Postman.svg",
      "credential_link":"https://verify.skilljar.com/c/rhda888xp5k4"
    },
    {
      "certification_name": "Foundational C# with Microsoft",
      "issuer":"freeCodeCamp",
      "issued_on":"Nov 2025",
      "issuer_logo":"/assets/certificate_issuer_logos/FreeCodeCamp.svg",
      "credential_link":"https://www.freecodecamp.org/certification/fcc70975110-e80b-49e0-b9da-633e8cac96be/foundational-c-sharp-with-microsoft"
    },
    {
      "certification_name": "Google AI Essentials",
      "issuer":"Google",
      "issued_on":"Oct 2024",
      "issuer_logo":"/assets/certificate_issuer_logos/Google.svg",
      "credential_link":"https://www.coursera.org/account/accomplishments/verify/ZN1UWANSAEKJ"
    },
    {
      "certification_name": "Fundamentals of Reinforcement Learning",
      "issuer":"University of Alberta",
      "issued_on":"Mar 2024",
      "issuer_logo":"/assets/certificate_issuer_logos/AlbertaUniversity.svg",
      "credential_link":"https://www.coursera.org/account/accomplishments/verify/8H6LWZ3S9MQ6"
    },
    {
      "certification_name": "Containers and Kubernetes Essentials",
      "issuer":"IBM",
      "issued_on":"Sep 2023",
      "issuer_logo":"/assets/certificate_issuer_logos/IBM.svg",
      "credential_link":"https://www.credly.com/badges/7f92b615-5088-4aba-b970-46e0098172f0/linked_in_profile"
    }
  ]

  
}
