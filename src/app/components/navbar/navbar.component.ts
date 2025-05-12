import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('navbar',{static:true}) navbar!: ElementRef;

  ngAfterViewInit(): void {
    const navbarEl = this.navbar.nativeElement;

    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){

        setTimeout(()=>{
          navbarEl.classList.add('visible')
        },2000)

        observer.unobserve(navbarEl)
      }
    },{threshold:0.3}
    
    );

    observer.observe(navbarEl);
  }

}
