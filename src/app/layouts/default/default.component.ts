import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpened=true;
  

  constructor() { }

  ngOnInit(): void {
  }
  openSideBar($event){
    this.sideBarOpened=!this.sideBarOpened;
  }

}
