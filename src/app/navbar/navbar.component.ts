import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public image!: string;
  constructor() {


  }

  ngOnInit() {
    this.image= '..//assets/headerMB.svg'
  }

}
