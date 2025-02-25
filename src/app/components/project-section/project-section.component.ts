import { Component } from '@angular/core';

@Component({
  selector: 'app-project-section',
  imports: [],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {
  data = [
      {
        "name": "BranchSelector",
        "url": "http://branchselector.com",
        "image": "assets/project_logos/BranchSelector.png",
        "description": "A website for students to discover the right educational and career path based on their interests and strengths.",
        "technologies": [
          "/assets/tech_logos/React.svg",
          "/assets/tech_logos/Firebase.svg",
          "/assets/tech_logos/Cloudflare.svg"
        ]
      },
      {
        "name": "IntelliSched",
        "url": "https://intellisched.vercel.app/",
        "image": "assets/project_logos/IntelliSched.png",
        "description": "A platform to generate university timetable using Genetic Algorithm.",
        "technologies": [
          "/assets/tech_logos/React.svg",
          "/assets/tech_logos/Python.svg",
          "/assets/tech_logos/GoogleCloud.svg"
        ]
      },
      {
        "name": "CheckedIn",
        "url": null,
        "image": "assets/project_logos/CheckedIn.png",
        "description": "A platform to keep track and organize of all your tasks to help you become more productive.",
        "technologies": [
          "/assets/tech_logos/Javascript.svg",
          "/assets/tech_logos/CSharp.svg",
          "/assets/tech_logos/DotNET.svg"
        ]
      }
    ];

    navigate: Function = (url: string): void => {
      if (url) {
        window.open(url, "_blank");
      }
    };
    
  
}
