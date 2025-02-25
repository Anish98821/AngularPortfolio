import { Component } from '@angular/core';
import { ExperienceDetailCardComponent } from "./experience-detail-card/experience-detail-card.component";

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
  selector: 'app-experience-section',
  imports: [ExperienceDetailCardComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {


  EGWorkData:UserProfile = {
    "company-name":"EDGK India Pvt Ltd",
    "designation":"Software Developer Trainee",
    "skill-badges":[
      {
        "image-url":"/assets/tech_logos/CSharp.svg",
        "skill-name":"C#"
      },
      {
        "image-url":"/assets/tech_logos/DotNET.svg",
        "skill-name":".NET"
      },
      {
        "image-url":"/assets/tech_logos/Angular.svg",
        "skill-name":"Angular"
      },
      {
        "image-url":"/assets/tech_logos/PostgreSQL.svg",
        "skill-name":"PostgreSQL"
      }
    ],
    "skills":[
      {
        "image-url":"/assets/tech_logos/Angular.svg",
        "skill-text":"Undergoing training on .NET, Angular and MAUI."
      },
      {
        "image-url":"/assets/tech_logos/PostgreSQL.svg",
        "skill-text":"Underwent training on PostgreSQL, Postman and Manual Testing "
      },
      {
        "image-url":"/assets/experience_logos/StarLogo.svg",
        "skill-text":"Designed and built this 'Portfolio Website' and 'Checkedin'."
      }
    ]
  }

  DreamersWorkData:UserProfile = {
    "company-name":"Sahyadri Edu DREAMERS R&D Pvt. Ltd",
    "designation":"Game Developer Intern",
    "skill-badges":[
      {
        "image-url":"/assets/tech_logos/Unity.svg",
        "skill-name":"Unity Engine"
      },
      {
        "image-url":"/assets/tech_logos/CSharp.svg",
        "skill-name":"C#"
      },
      {
        "image-url":"/assets/tech_logos/Blender.svg",
        "skill-name":"Blender"
      }
    ],
    "skills":[
      {
        "image-url":"/assets/experience_logos/StarLogo.svg",
        "skill-text":"Part of the development team that built the prototype, leading to Elevate 2021 Idea2PoC Grant."
      },
      {
        "image-url":"/assets/tech_logos/Unity.svg",
        "skill-text":"Built game scenes, enviornments and managed assests within Unity."
      },
      {
        "image-url":"/assets/tech_logos/CSharp.svg",
        "skill-text":"Implemented core game mechanics and modular systems written in C#. "
      },
      {
        "image-url":"/assets/tech_logos/Blender.svg",
        "skill-text":"Designed, modelled, textured and animated stylized 3D game assets."
      }
    ]
  }

  TorSecureWorkData:UserProfile = {
    "company-name":"Torsecure Cyber LLP",
    "designation":"Software Developer Intern",
    "skill-badges":[
      {
        "image-url":"/assets/tech_logos/React.svg",
        "skill-name":"React"
      },
      {
        "image-url":"/assets/tech_logos/Cloudflare.svg",
        "skill-name":"Cloudflare"
      },
      {
        "image-url":"/assets/tech_logos/Firebase.svg",
        "skill-name":"Firebase"
      },
      {
        "image-url":"/assets/tech_logos/Figma.svg",
        "skill-name":"Figma"
      }
    ],
    "skills":[
      {
        "image-url":"/assets/tech_logos/Figma.svg",
        "skill-text":"Designed and prototyped the UI for flagship product 'BranchSelector'"
      },
      {
        "image-url":"/assets/tech_logos/React.svg",
        "skill-text":"Developed responsive web applications for various client projects."
      },
      {
        "image-url":"/assets/tech_logos/Cloudflare.svg",
        "skill-text":"Developed backend services for products using Cloudflare Workers."
      },
      {
        "image-url":"/assets/tech_logos/Cloudflare.svg",
        "skill-text":"Managed hosting and configured DNS, routing, and network settings for web applications."
      },
      {
        "image-url":"/assets/tech_logos/Firebase.svg",
        "skill-text":"Integrated Firebase services for authentication, database and storage."
      },
      {
        "image-url":"/assets/experience_logos/StarLogo.svg",
        "skill-text":"Reduced the size of code base 25% by restructuring the code to enchance reusablity."
      },
      {
        "image-url":"/assets/experience_logos/StarLogo.svg",
        "skill-text":"Improved SEO reach of the flagship website by 30%."
      },
    ]
  }

  WorkData:UserProfile = this.EGWorkData;

  

  

  changeWorkDetail:Function = (hoveredOn:string):void =>{
    if(hoveredOn == "EGDK")
      this.WorkData = this.EGWorkData;
    if(hoveredOn == "Dreamers")
      this.WorkData = this.DreamersWorkData;
    if(hoveredOn == "TorSecure")
      this.WorkData = this.TorSecureWorkData;

    
  }

}
