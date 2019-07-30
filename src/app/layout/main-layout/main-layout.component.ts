import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * logout
   */
  public logout(): void {
    alert('Logout');
    // TODO: Hacer un route para llevar al /
  }

}
