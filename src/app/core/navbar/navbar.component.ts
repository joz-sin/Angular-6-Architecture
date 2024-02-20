import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  isHandset: Observable<BreakpointState>
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.isHandset = this.breakpointObserver.observe(Breakpoints.Handset);
  }
  
}
