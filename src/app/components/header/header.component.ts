import { Component, OnInit,HostListener, Inject  } from '@angular/core';
import {AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNavbarCollapsed=true;
  a:any='';
  constructor(private c:AppComponent){
    this.a=this.c.title;

  }
  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 0;
  }
  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}
classApplied = false;

toggleClass() {
  this.classApplied = !this.classApplied;
}
  
}
